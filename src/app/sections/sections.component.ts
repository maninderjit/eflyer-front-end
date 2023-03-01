import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SectionsService } from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  currentUrl:string = '';
  isDashboard:boolean = true;
  isItem :boolean = false;
  isCart:boolean = false;

  constructor(private router: Router, private sectionsService : SectionsService){

  }

  ngOnInit():void{
    this.currentUrl = this.router.url;
  }
}
