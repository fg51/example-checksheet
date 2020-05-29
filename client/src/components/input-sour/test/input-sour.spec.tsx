import { newSpecPage } from '@stencil/core/testing';
import { InputSour } from './input-sour';

describe('input-sour', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSour],
      html: `<input-sour></input-sour>`,
    });
    expect(page.root).toEqualHtml(`
      <input-sour>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-sour>
    `);
  });
});
