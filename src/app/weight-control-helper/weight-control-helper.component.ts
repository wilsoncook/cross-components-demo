import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'weight-control-helper',
  template: `
    <div>
      Weight Control Helper is Standby!
      <span style="color: red; font-weight: bolder;">Current Calorie: {{ calorie }}</span>
    </div>
  `
})

export class WeightControlHelperComponent {
  @Input() calorie: number = 0;
  @Output() warning = new EventEmitter<string>();
  
  constructor() {
    setInterval(() => {
      if (this.calorie >= 1000) {
        this.warning.emit('Stop eating or die!');
      }
    }, 1000);
  }
}