import { Component, h, Host } from '@stencil/core';

const TITLE_NAME = 'Fruit';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  private handleSubmit(event) {
    console.log('Button1 submit');
    console.log(event);
    const model = document.querySelector('input-model');
    console.log('model: ', model.value);
  }

  private handleClick(_event) {
    console.log('Button1 clicked');

    const worknumber = document.querySelector('work-number');
    console.log('worknumber: ', worknumber.value);

    const model = document.querySelector('input-model');
    console.log('model: ', model.value);

    const serial = document.querySelector('input-serial');
    console.log('serial: ', serial.serial);

    const country = document.querySelector('input-country');
    console.log('country: ', country.value);

    const standard = document.querySelector('input-standard');
    console.log('standard: ', standard.value);

    const visual = document.querySelector('input-visual');
    console.log('visual: ', visual.state);

    const weight = document.querySelector('input-weight');
    console.log('weight: ', weight.state);

    const sweet = document.querySelector('input-sweet');
    console.log('sweet: ', sweet.value);

    const sour = document.querySelector('input-sour');
    console.log('sour: ', sour.value);
  }

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Checksheet - {TITLE_NAME}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <form
            onSubmit={this.handleSubmit}
            action="/profile/ionic"
            method="post"
          >
            <ion-card>
              <ion-card-content>
                <work-number />
                <input-model />
                <input-serial />
                <input-country />
              </ion-card-content>
            </ion-card>

            <ion-label>0. 作業手順 </ion-label>
            <input-standard />

            <ion-label>1. 見た目</ion-label>
            <ion-list>
              <input-visual state={false} />
              <input-weight state={false} />
            </ion-list>

            <ion-label>2. 味</ion-label>
            <ion-list>
              <input-sweet />
              <input-sour />
            </ion-list>
            <ion-button
              type="button"
              size="large"
              expand="block"
              onClick={this.handleClick}
            >
              送信
            </ion-button>
          </form>
        </ion-content>
        <app-footer></app-footer>
      </Host>
    );
  }
}
