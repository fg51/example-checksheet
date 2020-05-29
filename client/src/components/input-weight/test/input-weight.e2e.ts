import { newE2EPage } from '@stencil/core/testing';

describe('input-weight', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-weight></input-weight>');

    const element = await page.find('input-weight');
    expect(element).toHaveClass('hydrated');
  });
});
