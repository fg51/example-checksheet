import { newSpecPage } from '@stencil/core/testing';
import { InputVisual } from './input-visual';

describe('input-visual', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputVisual],
      html: `<input-visual></input-visual>`,
    });
    expect(page.root).toEqualHtml(`
      <input-visual>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-visual>
    `);
  });
});
