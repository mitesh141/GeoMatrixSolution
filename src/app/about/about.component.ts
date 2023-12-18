

import { Component, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';
import {
  Modal,
  Ripple,
  Tooltip,
  Popover,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  isInView = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Initialize the 'isInView' value when the component loads
    initTE({ Modal, Ripple, Tooltip, Popover });
    this.checkDivInView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkDivInView();
  }

  private checkDivInView() {
    const elementPosition = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the target div is within the viewport
    this.isInView = elementPosition.top < windowHeight && elementPosition.bottom >= 0;
  }

// Added below by Mally popup trial
  showPopup = false;

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

}