import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-sour',
  styleUrl: 'input-sour.css',
  shadow: true,
})
export class InputSour {
  /**
   * sour is value.
   */
  @Prop({ mutable: true }) value = '';

  private handleChange(event: Event) {
    this.value = event.target['value'];
  }

  render() {
    return (
      <ion-item>
        <ion-label>酸味</ion-label>
        <ion-input
          type="text"
          name="sour-level"
          placeholder="3"
          color="primary"
          onIonChange={(event) => this.handleChange(event)} // eslint-disable-line react/jsx-no-bind
        />
      </ion-item>
    );
  }
}
