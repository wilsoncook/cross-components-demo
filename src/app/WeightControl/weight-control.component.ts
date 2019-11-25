import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WeightControl } from './WeightControl';

@Component({
  selector: 'weight-control',
  template: ''
})

export class WeightControlComponent {
  @Input() amount: number;
  @Output() overload = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    ReactDOM.render(
      React.createElement(WeightControl, this),
      this.elementRef.nativeElement
    );
  }
}