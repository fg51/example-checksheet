import { newE2EPage } from '@stencil/core/testing';

describe('input-sour', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-sour></input-sour>');

    const element = await page.find('input-sour');
    expect(element).toHaveClass('hydrated');
  });
});
