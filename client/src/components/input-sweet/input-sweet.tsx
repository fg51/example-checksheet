import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-sweet',
  styleUrl: 'input-sweet.css',
  shadow: true,
})
export class InputSweet {
  /**
   * sweet is value.
   */
  @Prop({ mutable: true }) value = '';

  private handleChange(event: Event) {
    this.value = event.target['value'];
  }

  render() {
    return (
      <ion-item>
        <ion-label>甘味</ion-label>
        <ion-input
          type="text"
          name="swee-level"
          placeholder="5"
          color="primary"
          onIonChange={(event) => this.handleChange(event)} // eslint-disable-line react/jsx-no-bind
        />
      </ion-item>
    );
  }
}
