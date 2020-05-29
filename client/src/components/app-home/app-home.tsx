import { Component, h, Host } from '@stencil/core';

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
            <ion-title>Checksheet - Fruit</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-card>
            <ion-card-content>
              <ion-item>
                <ion-label>作業番号</ion-label>
                <ion-input
                  type="text"
                  name="work-number"
                  placeholder="20-Y-1234"
                  color="primary"
                />
              </ion-item>

              <ion-item>
                <ion-label>果物</ion-label>
                <ion-select placeholder="果物">
                  <ion-select-option value="apple">apple</ion-select-option>
                  <ion-select-option value="banana">banana</ion-select-option>
                  <ion-select-option value="candy">candy</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-item>
                <ion-label>製造番号</ion-label>
                <ion-input type="text" name="serial-number" placeholder="101" />
              </ion-item>

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

              <ion-item>
                <ion-label>非標準種</ion-label>
                <ion-input
                  type="text"
                  name="nonstandard-number"
                  placeholder="mut"
                />
              </ion-item>
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
            <ion-item>
              <ion-item>見た目</ion-item>
              <ion-radio-group value="visual-level">
                <ion-item>
                  OK
                  <ion-radio />
                </ion-item>
                <ion-item>
                  NG <ion-radio />
                </ion-item>
              </ion-radio-group>
            </ion-item>
            <ion-item>
              <ion-item>重さ</ion-item>
              <ion-radio-group value="weight-level">
                <ion-item>
                  OK <ion-radio />
                </ion-item>
                <ion-item>
                  NG <ion-radio />
                </ion-item>
              </ion-radio-group>
            </ion-item>
          </ion-list>

          <ion-label>2. 味</ion-label>
          <ion-list>
            <ion-item>
              <ion-label>甘味</ion-label>
              <ion-input
                type="text"
                name="swee-level"
                placeholder="5"
                color="primary"
              />
            </ion-item>
            <ion-item>
              <ion-label>酸味</ion-label>
              <ion-input
                type="text"
                name="sour-level"
                placeholder="3"
                color="primary"
              />
            </ion-item>
          </ion-list>

          <app-footer></app-footer>
        </ion-content>
      </Host>
    );
  }
}
