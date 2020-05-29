import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-serial',
  styleUrl: 'input-serial.css',
  shadow: true,
})
export class InputSerial {
  /**
   * serial is serial number.
   */
  @Prop({ mutable: true }) serial = '';

  private handleChange(event: Event) {
    this.serial = event.target['value'];
  }

  render() {
    return (
      <ion-item>
        <ion-label>製造番号</ion-label>
        <ion-input
          type="text"
          name="serial-number"
          placeholder="101"
          value={this.serial}
          onIonChange={(event) => this.handleChange(event)} // eslint-disable-line react/jsx-no-bind
        />
      </ion-item>
    );
  }
}
