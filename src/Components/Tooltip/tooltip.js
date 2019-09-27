import { LitElement, html } from 'lit-element';
import { tooltipStyles } from './tooltip.style';

export class Tooltip extends LitElement {
  static get properties() {
    return {
      content: { type: String },
      placement: { type: String },
      isOpen: { type: Boolean },
    }
  }

  static get styles() {
    return tooltipStyles;
  }

  constructor() {
    super();
    this.content = null;
    this.isOpen = false;
    this.placement = 'bottom';
  }

  setTooltipAlignment(content, tooltip) {
    if (this.placement === 'bottom') {
      tooltip.style.transform = 'translate(-50%, 1rem)';
      tooltip.style.left = '50%';
    }
    if (this.placement === 'top') {
      tooltip.style.transform = `translate(-50%, -${content.offsetHeight + tooltip.offsetHeight + 16}px)`;
      tooltip.style.left = '50%';
    }
  }

  updated() {
    if (this.isOpen) {
      const tooltip = this.shadowRoot.querySelector('.tooltip-content');
      const content = this.shadowRoot.querySelector('slot').assignedElements()[0];
      tooltip.classList.add('isOpening');
      this.setTooltipAlignment(content, tooltip);
    }
  }

  handleOpenTooltip() {
    if (!this.isOpen) {
      this.isOpen = true;
    }
  }

  handleCloseTooltip() {
    const tooltip = this.shadowRoot.querySelector('.tooltip-content');
    if (tooltip) {
      tooltip.classList.replace('isOpening', 'isClosing');
      setTimeout(() => { this.isOpen = false; }, 200);
    }
  }

  render() {
    return html`
      <div
        class="tooltip-wrapper"
        @mouseenter=${this.handleOpenTooltip}
        @mouseleave=${this.handleCloseTooltip}
        @click=${this.handleCloseTooltip}
      >
        <slot></slot>
        ${this.isOpen
          ? html`
            <div class="tooltip-content">
              ${this.content}
            </div>
          `
          : html``}
      </div>
    `;
  }
}

customElements.define('qh-tooltip', Tooltip);