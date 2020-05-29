import { newE2EPage } from '@stencil/core/testing';

describe('input-country', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-country></input-country>');

    const element = await page.find('input-country');
    expect(element).toHaveClass('hydrated');
  });
});
