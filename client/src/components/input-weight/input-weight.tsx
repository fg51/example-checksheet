import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'input-weight',
  styleUrl: 'input-weight.css',
  shadow: true,
})
export class InputWeight {
  @State() state = false;

  render() {
    return (
      <ion-item>
        <ion-item>重さ</ion-item>
        NG <ion-toggle value="weight-level" checked={this.state} /> OK
      </ion-item>
    );
  }
}
