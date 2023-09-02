import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceServiceService } from 'src/app/service-service.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

//   images = [
//     {
//         src: './assets/imgs/producttest.png',
//         title: 'Image Title 1',
//         subtitle: 'Subtitle 1',
//         desc: 'Description 1'
//     },
//     {
//       src: './assets/imgs/producttest.png',
//       title: 'Image Title 1',
//       subtitle: 'Subtitle 1',
//       desc: 'Description 1'
//   },
//   {
//     src: './assets/imgs/producttest.png',
//     title: 'Image Title 1',
//     subtitle: 'Subtitle 1',
//     desc: 'Description 1'
// },
// {
//   src: './assets/imgs/producttest.png',
//   title: 'Image Title 1',
//   subtitle: 'Subtitle 1',
//   desc: 'Description 1'
// }
//     // Add more images here
//   ];

  overlaySrc = '';
  overlayTitle = '';
  overlaySubtitle = '';
  overlayDesc = '';
  isZoomed = false;

  service: any;
  id: any;
  images: any;
  constructor(private activatedRoute: ActivatedRoute, private serviceObj: ServiceServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service = this.serviceObj.services.find(x => x.id == this.id)|| null;
    this.images = this.service.images;
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
