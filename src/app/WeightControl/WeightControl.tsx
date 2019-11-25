import * as React from 'react';
import { EventEmitter } from '@angular/core';
import { WeightControlHelper } from '../weight-control-helper/WeightControlHelper';

class Props {
  amount: number = 400;
  overload = new EventEmitter<number>();
}

class State {
  calorie: number = 0;
}

export class WeightControl extends React.Component<Props, State> {
  state = new State();

  eat() {
    this.setState({ calorie: this.state.calorie + this.props.amount });
    if (this.state.calorie >= 2000) {
      this.props.overload.emit(this.state.calorie);
    }
  }

  render() {
    return <div>
      <p>Current Calorie: {this.state.calorie}</p>
      <p><button onClick={() => this.eat()}>Eat a lot</button></p>
      <p>
        <WeightControlHelper calorie={this.state.calorie} warning={(message) => console.warn(message)} />
      </p>
    </div>;
  }
}