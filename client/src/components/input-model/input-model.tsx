import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'input-model',
  styleUrl: 'input-model.css',
  shadow: true,
})
export class InputModel {
  /**
   * labelTitle is title.
   */
  @Prop() labelTitle = '果物';

  /**
   * initialValue is placeholder.
   */
  @Prop() initialValue = '果物';

  /**
   * items is selectable items.
   */
  @Prop() items = ['apple', 'banana', 'cherry'];

  /**
   * value is selected item.
   */
  @Prop({ mutable: true }) value: string = '';

  @Listen('ionChange')
  ionChangeHandler(event) {
    this.value = event.detail.value;
  }

  render() {
    let selects = this.items.map((item) => {
      return <ion-select-option value={item}>{item}</ion-select-option>;
    });
    return (
      <ion-item>
        <ion-label>{this.labelTitle}</ion-label>
        <ion-select multiple={false}>{selects}</ion-select>
      </ion-item>
    );
  }
}
