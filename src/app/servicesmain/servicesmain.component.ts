import { Component, OnInit } from '@angular/core';
import {
  Carousel,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-servicesmain',
  templateUrl: './servicesmain.component.html',
  styleUrls: ['./servicesmain.component.css']
})
export class ServicesmainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    initTE({ Carousel });
    
  }

}
