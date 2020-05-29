import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'input-visual',
  styleUrl: 'input-visual.css',
  shadow: true,
})
export class InputVisual {
  /**
   * state is defalut state.
   */
  @Prop({ mutable: true }) state: boolean = false;

  @Listen('ionChange')
  ionChangeHandler(event) {
    this.state = event.detail.checked;
  }

  // @ts-ignore TS6133
  private componentWillLoad() {
    this.state = this.state;
  }

  render() {
    return (
      <ion-item>
        <ion-item>見た目</ion-item>
        NG <ion-toggle value="visual-level" checked={this.state} /> OK
      </ion-item>
    );
  }
}
