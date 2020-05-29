import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter implements ComponentInterface {
  render() {
    return (
      <ion-footer>
        ver.0.0.3-develop 作成日: 2020-05-29 作成者: Alice 承認者: Bob
      </ion-footer>
    );
  }
}
