import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nexus-panel',
  styleUrl: 'nexus-panel.scss',
  shadow: true,
})
export class NexusPanel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
