import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagslider',
  templateUrl: './imagslider.component.html',
  styleUrls: ['./imagslider.component.css']
})
export class ImagsliderComponent implements OnInit {

  slideIndex = 1;

  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    const captionText = document.getElementById("caption");

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";

    if (captionText) {
      const altAttribute = dots[this.slideIndex - 1].getAttribute('alt');
      if (altAttribute) {
        captionText.innerHTML = altAttribute;
      }
    }
  }
}

