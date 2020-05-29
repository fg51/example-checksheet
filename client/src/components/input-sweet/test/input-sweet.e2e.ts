import { newE2EPage } from '@stencil/core/testing';

describe('input-sweet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-sweet></input-sweet>');

    const element = await page.find('input-sweet');
    expect(element).toHaveClass('hydrated');
  });
});
