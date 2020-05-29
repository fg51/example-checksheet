import { newE2EPage } from '@stencil/core/testing';

describe('input-visual', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-visual></input-visual>');

    const element = await page.find('input-visual');
    expect(element).toHaveClass('hydrated');
  });
});
