import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-model',
  styleUrl: 'input-model.css',
  shadow: true,
})
export class InputModel {
  render() {
    return (
      <ion-item>
        <ion-label>果物</ion-label>
        <ion-select placeholder="果物">
          <ion-select-option value="apple">apple</ion-select-option>
          <ion-select-option value="banana">banana</ion-select-option>
          <ion-select-option value="candy">candy</ion-select-option>
        </ion-select>
      </ion-item>
    );
  }
}
