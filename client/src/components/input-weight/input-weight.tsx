import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'input-weight',
  styleUrl: 'input-weight.css',
  shadow: true,
})
export class InputWeight {
  /**
   * state is defalut state.
   */
  @Prop({ mutable: true }) state: boolean = false;

  @Listen('ionChange')
  ionChangeHandler(event) {
    this.state = event.detail.checked;
  }

  render() {
    return (
      <ion-item>
        <ion-item>重さ</ion-item>
        NG <ion-toggle value="weight-level" checked={this.state} /> OK
      </ion-item>
    );
  }
}
