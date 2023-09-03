import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
   fixturesImages = [
    {
        src: './assets/services/fixture1.png',
        title: 'Fixture 2',
        subtitle: '',
        desc: ''
    },
    {
      src: './assets/services/fixture2.png',
      title: 'Fixture 2',
      subtitle: '',
      desc: ''
    }
    // Add more images here
  ];

  spclImages = [
    {
        src: './assets/services/specialcomp1.jpg',
        title: 'Special Component 1',
        subtitle: '',
        desc: ''
    },
    {
      src: './assets/services/specialcomp2.jpg',
      title: 'Special Component 2',
      subtitle: '',
      desc: ''
    },
    {
    src: './assets/services/specialcomp3.jpg',
    title: 'Special Component 3',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/specialcomp4.jpg',
    title: 'Special Component 4',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/specialcomp5.jpg',
    title: 'Special Component 5',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/specialcomp6.jpg',
    title: 'Special Component 6',
    subtitle: '',
    desc: ''
  }
    // Add more images here
  ];

  machinedImages = [
    {
        src: './assets/services/machined com1.jpg',
        title: 'Machined Component 1',
        subtitle: '',
        desc: ''
    },
    {
      src: './assets/services/machined comp2.jpg',
      title: 'Machined Component 2',
      subtitle: '',
      desc: ''
    },
    {
    src: './assets/services/machined comp3.jpg',
    title: 'Machined Component 3',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/machined comp4.jpg',
    title: 'Machined Component 4',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/machined comp5.jpg',
    title: 'Machined Component 5',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/machined comp6.jpg',
    title: 'Machined Component 6',
    subtitle: '',
    desc: ''
  },
  {
    src: './assets/services/machined comp7.jpg',
    title: 'Machined Component 7',
    subtitle: '',
    desc: ''
  }
    // Add more images here
  ];

  services = [
    {id:101, serviceName: 'Fixtures', author:'Mally', price:'567567898$', description:'Desc for PHP service',images: this.fixturesImages},
    {id:102,serviceName: 'Special Component', author:'Myth', price:'0.00002$', description:'Desc for HTML service', images: this.spclImages},
    {id:103, serviceName: 'Machined Component', author:'Harry', price:'0.0000$', description:'Desc for MongoDB service', images: this.machinedImages}
   ]

  constructor() { }
}
