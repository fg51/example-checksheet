import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'work-number',
  styleUrl: 'work-number.css',
  shadow: true,
})
export class WorkNumber {
  /**
   * value is work number.
   */
  @Prop({ mutable: true }) value = '';

  private handleChange(event: Event) {
    this.value = event.target['value'];
  }

  render() {
    return (
      <ion-item>
        <ion-label>作業番号</ion-label>
        <ion-input
          type="text"
          name="work-number"
          placeholder="20-Y-1234"
          color="primary"
          onIonChange={(event) => this.handleChange(event)} // eslint-disable-line react/jsx-no-bind
        />
      </ion-item>
    );
  }
}
