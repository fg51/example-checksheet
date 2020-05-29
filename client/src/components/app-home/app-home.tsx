import { Component, h, Host } from '@stencil/core';

const TITLE_NAME = 'Fruit';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Checksheet - {TITLE_NAME}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-form>
            <ion-card>
              <ion-card-content>
                <work-number />
                <input-model />
                <input-serial />
                <input-country />
              </ion-card-content>
            </ion-card>

            <ion-label>0. 作業手順 </ion-label>
            <ion-item>
              <ion-radio-group value="standard-kind">
                <ion-item>
                  <ion-label>標準種：標準手順</ion-label>
                  <ion-radio />
                </ion-item>
                <ion-item>
                  <ion-label>非標準種：製作手配書付属資料</ion-label>
                  <ion-radio />
                </ion-item>
              </ion-radio-group>
            </ion-item>

            <ion-label>1. 見た目</ion-label>
            <ion-list>
              <input-visual />
              <input-weight />
            </ion-list>

            <ion-label>2. 味</ion-label>
            <ion-list>
              <input-sweet />
              <input-sour />
            </ion-list>
            <ion-button class="submit" size="large" expand="block">
              送信
            </ion-button>
          </ion-form>
        </ion-content>
        <app-footer></app-footer>
      </Host>
    );
  }
}
