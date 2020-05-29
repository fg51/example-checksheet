import { newSpecPage } from '@stencil/core/testing';
import { InputCountry } from './input-country';

describe('input-country', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputCountry],
      html: `<input-country></input-country>`,
    });
    expect(page.root).toEqualHtml(`
      <input-country>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-country>
    `);
  });
});
