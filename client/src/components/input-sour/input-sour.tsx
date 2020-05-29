import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-sour',
  styleUrl: 'input-sour.css',
  shadow: true,
})
export class InputSour {
  render() {
    return (
      <ion-item>
        <ion-label>酸味</ion-label>
        <ion-input
          type="text"
          name="sour-level"
          placeholder="3"
          color="primary"
        />
      </ion-item>
    );
  }
}
