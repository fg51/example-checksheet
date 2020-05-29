import { newSpecPage } from '@stencil/core/testing';
import { InputStandard } from './input-standard';

describe('input-standard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputStandard],
      html: `<input-standard></input-standard>`,
    });
    expect(page.root).toEqualHtml(`
      <input-standard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-standard>
    `);
  });
});
