import { newE2EPage } from '@stencil/core/testing';

describe('work-number', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<work-number></work-number>');

    const element = await page.find('work-number');
    expect(element).toHaveClass('hydrated');
  });
});
