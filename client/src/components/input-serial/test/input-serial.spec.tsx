import { newSpecPage } from '@stencil/core/testing';
import { InputSerial } from './input-serial';

describe('input-serial', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSerial],
      html: `<input-serial></input-serial>`,
    });
    expect(page.root).toEqualHtml(`
      <input-serial>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-serial>
    `);
  });
});
