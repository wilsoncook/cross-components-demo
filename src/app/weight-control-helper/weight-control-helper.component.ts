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
  @Input() calorie: number;
  @Output() warning = new EventEmitter<string>();
  
  // TODO demo2-helper-warning-logic
}