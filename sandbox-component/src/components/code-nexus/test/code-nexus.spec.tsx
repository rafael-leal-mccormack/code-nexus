import { newSpecPage } from '@stencil/core/testing';
import { CodeNexus } from '../code-nexus';

describe('code-nexus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CodeNexus],
      html: `<code-nexus></code-nexus>`,
    });
    expect(page.root).toEqualHtml(`
      <code-nexus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </code-nexus>
    `);
  });
});
