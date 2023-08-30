import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  isInView = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Initialize the 'isInView' value when the component loads
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
}

