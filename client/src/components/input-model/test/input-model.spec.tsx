import { newSpecPage } from '@stencil/core/testing';
import { InputModel } from './input-model';

describe('input-model', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputModel],
      html: `<input-model></input-model>`,
    });
    expect(page.root).toEqualHtml(`
      <input-model>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-model>
    `);
  });
});
