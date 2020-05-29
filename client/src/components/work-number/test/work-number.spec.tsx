import { newSpecPage } from '@stencil/core/testing';
import { WorkNumber } from './work-number';

describe('work-number', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WorkNumber],
      html: `<work-number></work-number>`,
    });
    expect(page.root).toEqualHtml(`
      <work-number>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </work-number>
    `);
  });
});
