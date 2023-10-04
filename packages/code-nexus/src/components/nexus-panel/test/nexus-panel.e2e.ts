import { newE2EPage } from '@stencil/core/testing';

describe('nexus-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nexus-panel></nexus-panel>');

    const element = await page.find('nexus-panel');
    expect(element).toHaveClass('hydrated');
  });
});
