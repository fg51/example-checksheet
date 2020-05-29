import { Component, h } from '@stencil/core';

@Component({
  tag: 'work-number',
  styleUrl: 'work-number.css',
  shadow: true,
})
export class WorkNumber {
  render() {
    return (
      <ion-item>
        <ion-label>作業番号</ion-label>
        <ion-input
          type="text"
          name="work-number"
          placeholder="20-Y-1234"
          color="primary"
        />
      </ion-item>
    );
  }
}
