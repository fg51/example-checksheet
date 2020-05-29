import { newE2EPage } from '@stencil/core/testing';

describe('input-model', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-model></input-model>');

    const element = await page.find('input-model');
    expect(element).toHaveClass('hydrated');
  });
});
