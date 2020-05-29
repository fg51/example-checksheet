import { newE2EPage } from '@stencil/core/testing';

describe('input-standard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-standard></input-standard>');

    const element = await page.find('input-standard');
    expect(element).toHaveClass('hydrated');
  });
});
