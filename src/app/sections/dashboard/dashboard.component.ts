import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardList:any=[];
  indexMap : Map<number, any> = new Map<number, any>();

  constructor(private dashboardService: DashboardService){
    console.log("constructor");
  }

  ngOnInit():void{
    this.dashboardService.getCategoryList().subscribe((data: any) => {
      this.dashboardList = data;
    });
  }

  activatedItemList(dashboardIndex:number): any{
    let dashboard = this.dashboardList[dashboardIndex];
    let arr = lodash.cloneDeep(dashboard.itemList);
    let startItem = this.indexMap.get(dashboardIndex);
    if(startItem == undefined){
      this.indexMap.set(dashboardIndex, {index:0, list:[]});
      startItem = this.indexMap.get(dashboardIndex);
      let endIndex = 3;
      if(arr.length<=startItem.index + 3){
        endIndex = arr.length - 1
      }
      let list = arr.slice(startItem.index, startItem.index + 3);
      startItem.list = list;
      this.indexMap.set(dashboardIndex, startItem);
    }
    return startItem.list;
  }

  next(dashboardIndex:number):void{
    let dashboard = this.dashboardList[dashboardIndex];
    let arr = lodash.cloneDeep(dashboard.itemList);
    let startItem = this.indexMap.get(dashboardIndex);
    if(typeof(startItem) == 'object'){
      let startIndex = startItem.index + 3;
      let endIndex = startIndex + 3;
      let isMinimum = false;
      if(arr.length <= endIndex){
        isMinimum = true;
      }
      // if(arr.length <= startIndex){
      //   startIndex = 0;
      //   endIndex = 3;          
      // }
      let list = [];
      if(isMinimum){
        list = arr.slice(startIndex, endIndex);
      } else{
        list = arr.slice(startIndex);
      }
      startItem.index = startIndex;
      startItem.list = list;
      this.indexMap.set(dashboardIndex, startItem);
    }
  }

  prev(dashboardIndex:number):void{
    let dashboard = this.dashboardList[dashboardIndex];
    let arr = lodash.cloneDeep(dashboard.itemList);
    let startItem = this.indexMap.get(dashboardIndex);
    if(typeof(startItem) == 'object'){
      let startIndex = startItem.index - 3;
      let endIndex = startIndex + 3;
      if(0 > startIndex){
        startIndex = 0;
        endIndex = 3;
      }
      let list = arr.slice(startIndex, endIndex);
      startItem.index = startIndex;
      startItem.list = list;
      this.indexMap.set(dashboardIndex, startItem);
    }
  }
}
