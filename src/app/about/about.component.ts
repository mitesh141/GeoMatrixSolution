// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// // Added below by Mally popup trial
//   showPopup = false;

//   openPopup(): void {
//     this.showPopup = true;
//   }

//   closePopup(): void {
//     this.showPopup = false;
//   }

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

// Added below by Mally popup trial
  showPopup = false;

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

}