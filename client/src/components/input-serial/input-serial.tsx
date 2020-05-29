import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-serial',
  styleUrl: 'input-serial.css',
  shadow: true,
})
export class InputSerial {
  render() {
    return (
      <ion-item>
        <ion-label>製造番号</ion-label>
        <ion-input type="text" name="serial-number" placeholder="101" />
      </ion-item>
    );
  }
}
