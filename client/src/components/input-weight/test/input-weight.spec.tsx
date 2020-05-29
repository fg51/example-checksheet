import { newSpecPage } from '@stencil/core/testing';
import { InputWeight } from './input-weight';

describe('input-weight', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputWeight],
      html: `<input-weight></input-weight>`,
    });
    expect(page.root).toEqualHtml(`
      <input-weight>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-weight>
    `);
  });
});
