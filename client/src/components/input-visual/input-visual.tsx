import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'input-visual',
  styleUrl: 'input-visual.css',
  shadow: true,
})
export class InputVisual {
  @State() state = false;

  render() {
    return (
      <ion-item>
        <ion-item>見た目</ion-item>
        NG <ion-toggle value="visual-level" checked={this.state} /> OK
      </ion-item>
    );
  }
}
