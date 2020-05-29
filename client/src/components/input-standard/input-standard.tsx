import { Component, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'input-standard',
  styleUrl: 'input-standard.css',
  shadow: true,
})
export class InputStandard {
  /**
   * value is value.
   */
  @Prop({ mutable: true }) value: string = '';

  @Listen('ionChange')
  ionChangeHandler(event) {
    this.value = event.detail.value;
  }

  render() {
    return (
      <ion-item>
        <ion-radio-group value="standard-kind">
          <ion-item>
            <ion-label>標準種：標準手順</ion-label>
            <ion-radio value="standard" />
          </ion-item>
          <ion-item>
            <ion-label>非標準種：製作手配書付属資料</ion-label>
            <ion-radio value="non-standard" />
          </ion-item>
        </ion-radio-group>
      </ion-item>
    );
  }
}
