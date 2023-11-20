import { newSpecPage } from '@stencil/core/testing';
import { NexusTabs } from '../nexus-tabs';

describe('nexus-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NexusTabs],
      html: `<nexus-tabs></nexus-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <nexus-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nexus-tabs>
    `);
  });
});
