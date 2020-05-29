import { newE2EPage } from '@stencil/core/testing';

describe('input-serial', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-serial></input-serial>');

    const element = await page.find('input-serial');
    expect(element).toHaveClass('hydrated');
  });
});
