import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
   fixturesImages = [
    {
        src: './assets/services/fixture1.png',
        title: 'Fixture 1',
        subtitle: 'Fixture 1',
        desc: 'fixture 1 decription '
    },
    {
      src: './assets/services/fixture2.png',
      title: 'Fixture 1',
      subtitle: 'Fixture 1',
      desc: 'Description 1'
    }
    // Add more images here
  ];

  spclImages = [
    {
        src: './assets/services/specialcomp1.jpg',
        title: 'Image Title 1',
        subtitle: 'Subtitle 1',
        desc: 'Description 1'
    },
    {
      src: './assets/services/specialcomp2.jpg',
      title: 'Image Title 1',
      subtitle: 'Subtitle 1',
      desc: 'Description 1'
    },
    {
    src: './assets/services/specialcomp3.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/specialcomp4.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/specialcomp5.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/specialcomp6.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  }
    // Add more images here
  ];

  machinedImages = [
    {
        src: './assets/services/machined com1.jpg',
        title: 'Image Title 1',
        subtitle: 'Subtitle 1',
        desc: 'Description 1'
    },
    {
      src: './assets/services/machined comp2.jpg',
      title: 'Image Title 1',
      subtitle: 'Subtitle 1',
      desc: 'Description 1'
    },
    {
    src: './assets/services/machined comp3.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/machined comp4.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/machined comp5.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/machined comp6.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  },
  {
    src: './assets/services/machined comp7.jpg',
    title: 'Image Title 1',
    subtitle: 'Subtitle 1',
    desc: 'Description 1'
  }
    // Add more images here
  ];

  services = [
    {id:101, serviceName: 'PHP', author:'Mally', price:'567567898$', description:'Desc for PHP service',images: this.fixturesImages},
    {id:102,serviceName: 'HTML', author:'Myth', price:'0.00002$', description:'Desc for HTML service', images: this.spclImages},
    {id:103, serviceName: 'MongoDB', author:'Harry', price:'0.0000$', description:'Desc for MongoDB service', images: this.machinedImages}
   ]

  constructor() { }
}
