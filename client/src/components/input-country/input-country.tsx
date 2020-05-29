import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-country',
  styleUrl: 'input-country.css',
  shadow: true,
})
export class InputCountry {
  render() {
    return (
      <ion-item>
        <ion-list-header>生産国</ion-list-header>
        <ion-segment value="country">
          <ion-segment-button value="america">
            <ion-label>America</ion-label>
          </ion-segment-button>
          <ion-segment-button value="brazil">
            <ion-label>Brazil</ion-label>
          </ion-segment-button>
          <ion-segment-button value="china" disabled>
            <ion-label>China</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-item>
    );
  }
}
