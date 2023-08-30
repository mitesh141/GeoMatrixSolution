import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  isInView = false; // Define the isInView property

  constructor(private renderer: Renderer2, private el: ElementRef) {}

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
}
