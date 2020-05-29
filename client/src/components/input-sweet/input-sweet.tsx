import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-sweet',
  styleUrl: 'input-sweet.css',
  shadow: true,
})
export class InputSweet {
  render() {
    return (
      <ion-item>
        <ion-label>甘味</ion-label>
        <ion-input
          type="text"
          name="swee-level"
          placeholder="5"
          color="primary"
        />
      </ion-item>
    );
  }
}
