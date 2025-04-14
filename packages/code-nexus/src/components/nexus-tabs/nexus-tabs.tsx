import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'nexus-tab',
  styleUrl: 'nexus-tabs.scss',
  shadow: true,
})
export class NexusTabs {
  @Prop() onDark = false;

  @Prop() active = false;
  
  /**
   * Optional icon to display in the tab
   */
  @Prop() icon?: string;
  
  /**
   * Tooltip text for the tab
   */
  @Prop() tooltip?: string;
  
  /**
   * Whether the tab is disabled
   */
  @Prop() disabled = false;
  
  render() {
    return (
      <Host class={{
        'nexus-tab': true,
        [`theme-${this.onDark ? 'dark' : 'light'}`]: true,
        'nexus-tab-active': this.active,
        'nexus-tab-disabled': this.disabled
      }}>
        <button 
          class="tab" 
          title={this.tooltip}
          disabled={this.disabled}
        >
          {this.icon && <span class="tab-icon" innerHTML={this.icon}></span>}
          <span class="tab-content">
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
