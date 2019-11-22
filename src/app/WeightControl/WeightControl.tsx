import * as React from 'react';
import { EventEmitter } from '@angular/core';

class Props {
  // TODO demo1-reactprops
}

class State {
  calorie: number;
}

export class WeightControl extends React.Component<Props, State> {
  eat() {
    this.setState({ calorie: this.state.calorie + 400 });
    // TODO demo1-ifoverload
  }

  render() {
    return <div>
      <p>Current Calorie: {this.state.calorie}</p>
      <p><button onClick={() => this.eat()}>Eat a lot</button></p>
    </div>;
  }
}