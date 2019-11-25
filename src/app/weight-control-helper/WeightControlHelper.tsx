import * as React from 'react';
import { ɵComponentDef, ɵmarkDirty, ɵrenderComponent, ɵNG_COMPONENT_DEF, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeightControlHelperComponent } from './weight-control-helper.component';

export class WeightControlHelper extends React.Component<any, any> {
  private ngComponent: any;
  private componentDef: ɵComponentDef<any>;
  private selector: string;
  private changedProps = new Set<string>();
  private subscriptions: Subscription[] = [];
  private ngComponentClass = WeightControlHelperComponent;

  constructor(props) {
    super(props);

    this.componentDef = this.ngComponentClass[ɵNG_COMPONENT_DEF];
    this.selector = this.componentDef.selectors[0][0] as string;
  }

  componentDidMount() {
    this.ngComponent = ɵrenderComponent(this.ngComponentClass);
  
    this.subscriptions.push(
      ...Object.keys(this.componentDef.outputs).map(key => {
        return this.ngComponent[key].subscribe(event => {
          if (typeof this.props[key] === 'function') {
            this.props[key](event);
          }
        });
      })
    );
  }

  componentWillUnmount() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  componentDidUpdate() {
    if (this.ngComponent) {
      const changes: SimpleChanges = {};
      Object.keys(this.props).forEach(key => {
        if (Object.keys(this.componentDef.inputs).includes(key) && this.ngComponent[key] !== this.props[key]) {
          changes[key] = new SimpleChange(this.componentDef[key], this.props[key], !this.changedProps.has(key));
          this.changedProps.add(key);
          this.ngComponent[key] = this.props[key];
        }
      });
  
      if (typeof this.ngComponent['ngOnChanges'] === 'function') {
        this.ngComponent['ngOnChanges'](changes);
      }
  
      ɵmarkDirty(this.ngComponent);
    }
  }

  render() {
    const Selector = this.selector;
    return <Selector></Selector>;
  }
}