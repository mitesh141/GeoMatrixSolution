import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
   fixturesImages = [
    {
        src: 'https://ik.imagekit.io/ht0xrdoeg/services/fixture1.png?updatedAt=1693813995213',
        title: 'Fixture 2',
        subtitle: '',
        desc: ''
    },
    {
      src: 'https://ik.imagekit.io/ht0xrdoeg/services/fixture2.png?updatedAt=1693813995361',
      title: 'Fixture 2',
      subtitle: '',
      desc: ''
    }
    // Add more images here
  ];

  spclImages = [
    {
        src: 'https://ik.imagekit.io/ht0xrdoeg/services/specialcomp1.jpg?updatedAt=1693813997277',
        title: 'Special Component 1',
        subtitle: '',
        desc: ''
    },
    {
      src: 'https://ik.imagekit.io/ht0xrdoeg/services/specialcomp2.jpg?updatedAt=1693813998135',
      title: 'Special Component 2',
      subtitle: '',
      desc: ''
    },
    {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/specialcomp3.jpg?updatedAt=1693813998425',
    title: 'Special Component 3',
    subtitle: '',
    desc: ''
  },
  {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/specialcomp4.jpg?updatedAt=1693813998258',
    title: 'Special Component 4',
    subtitle: '',
    desc: ''
  },
  {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/specialcomp5.jpg?updatedAt=1693814000137',
    title: 'Special Component 5',
    subtitle: '',
    desc: ''
  }
    // Add more images here
  ];

  machinedImages = [
    {
        src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20com1.jpg?updatedAt=1693813993589',
        title: 'Machined Component 1',
        subtitle: '',
        desc: ''
    },
    {
      src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20comp2.jpg?updatedAt=1693813993497',
      title: 'Machined Component 2',
      subtitle: '',
      desc: ''
    },
    {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20comp3.jpg?updatedAt=1693813993477',
    title: 'Machined Component 3',
    subtitle: '',
    desc: ''
  },
  {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20comp4.jpg?updatedAt=1693813993257',
    title: 'Machined Component 4',
    subtitle: '',
    desc: ''
  },
  {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20comp5.jpg?updatedAt=1693813996623',
    title: 'Machined Component 5',
    subtitle: '',
    desc: ''
  },
  {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20comp6.jpg?updatedAt=1693813996779',
    title: 'Machined Component 6',
    subtitle: '',
    desc: ''
  },
  {
    src: 'https://ik.imagekit.io/ht0xrdoeg/services/machined%20comp7.jpg?updatedAt=1693813996970',
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
