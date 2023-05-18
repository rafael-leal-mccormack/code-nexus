import { newE2EPage } from '@stencil/core/testing';

describe('code-nexus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<code-nexus></code-nexus>');

    const element = await page.find('code-nexus');
    expect(element).toHaveClass('hydrated');
  });
});
