import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'nexus-tab',
  styleUrl: 'nexus-tabs.scss',
  shadow: true,
})
export class NexusTabs {
  @Prop() onDark = false;

  @Prop() active = false;
  
  render() {
    return (
      <Host class={{
        'nexus-tab': true,
        [`theme-${this.onDark ? 'dark' : 'light'}`]: true,
        'nexus-tab-active': this.active
      }}>
        <button class="tab">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
