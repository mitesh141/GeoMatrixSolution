import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  animations: [
    trigger('count', [
      state('increment', style({ transform: 'scale(1.1)' })),
      transition('* <=> increment', [
        animate('1s ease-out')
      ])
    ])
  ]
})

export class StatsComponent implements OnInit {

  constructor() { }

  currentCount: number = 0;
  counterState: string = 'initial';

  ngOnInit(): void {
    this.startCounter();
  }

  startCounter(): void {
    const targetCount = 1000;
    const step = Math.ceil(targetCount / 100);

    const interval = setInterval(() => {
      if (this.currentCount < targetCount) {
        this.currentCount += step;
        this.counterState = 'increment';
      } else {
        this.currentCount = targetCount;
        this.counterState = 'initial';
        clearInterval(interval);
      }
    }, 10);
  }
}
