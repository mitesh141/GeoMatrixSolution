import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    {
        src: './assets/imgs/producttest.png',
        title: 'Image Title 1',
        subtitle: 'Subtitle 1',
        desc: 'Description 1'
    },
    {
      src: './assets/imgs/producttest.png',
      title: 'Image Title 1',
      subtitle: 'Subtitle 1',
      desc: 'Description 1'
  },
  {
    src: './assets/imgs/producttest.png',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
},
{
  src: './assets/imgs/producttest.png',
  title: 'Image Title 1',
  subtitle: 'Subtitle 1',
  desc: 'Description 1'
}
    // Add more images here
  ];

  overlaySrc = '';
  overlayTitle = '';
  overlaySubtitle = '';
  overlayDesc = '';
  isZoomed = false;

  constructor() { }

  ngOnInit(): void {
  }

  showImage(src: string, title: string, subtitle: string, desc: string): void {
    this.overlaySrc = src;
    this.overlayTitle = title;
    this.overlaySubtitle = subtitle;
    this.overlayDesc = desc;
    this.isZoomed = false;
  }

  hideImage(): void {
    this.overlaySrc = '';
    this.overlayTitle = '';
    this.overlaySubtitle = '';
    this.overlayDesc = '';
    this.isZoomed = false;
  }

  toggleZoom(): void {
    this.isZoomed = !this.isZoomed;
  }
}
