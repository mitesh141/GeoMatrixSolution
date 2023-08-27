import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent{

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

}


// // image-popup.component.ts
// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-image-popup',
//   templateUrl: './image-popup.component.html',
//   styleUrls: ['./image-popup.component.css'],
// })
// export class ImagePopupComponent {
//   @Output() close: EventEmitter<void> = new EventEmitter<void>();
// }
