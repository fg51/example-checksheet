import { newSpecPage } from '@stencil/core/testing';
import { InputSweet } from './input-sweet';

describe('input-sweet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSweet],
      html: `<input-sweet></input-sweet>`,
    });
    expect(page.root).toEqualHtml(`
      <input-sweet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-sweet>
    `);
  });
});
