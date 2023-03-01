import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item:any={name: 'Computer', price: '35,000', imagePath:'assets/images/computer-img.png'};
//   routerLink="/cart/{{item.id}}"

  constructor(private route:ActivatedRoute, private itemService:ItemService){

  }

  ngOnInit():void{
    console.log("ngOnInit");
    let itemId:number = this.route.snapshot.params["itemId"];
    console.log('itemId',itemId);

    this.itemService.getItem(itemId).subscribe((data: any) => {
      this.item = data;
    });
  }

}
