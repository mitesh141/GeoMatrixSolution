import { Component, OnInit } from '@angular/core';
import {
  Ripple,
  initTE,
} from "tw-elements";
initTE({ Ripple });

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
