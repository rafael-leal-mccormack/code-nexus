import { newSpecPage } from '@stencil/core/testing';
import { NexusPanel } from '../nexus-panel';

describe('nexus-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NexusPanel],
      html: `<nexus-panel></nexus-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <nexus-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nexus-panel>
    `);
  });
});
