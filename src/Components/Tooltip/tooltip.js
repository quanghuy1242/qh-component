import { LitElement, html } from 'lit-element';
import { styles } from './tooltip.style';

export class Tooltip extends LitElement {
  static get properties() {
    return {
      content: { type: String },
      gap: { type: Number },
      isOpen: { type: Boolean },
      savedData: { type: Object },
    }
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.content = null;
    this.gap = 5;
    this.isOpen = false;
    this.savedData = {};
  }

  updated() {
    if (this.isOpen) {
      const tooltip = this.shadowRoot.querySelector('.tooltip-content');
      tooltip.style.top = `${this.savedData.y + this.gap}px`;
      tooltip.style.left = `${this.savedData.x + this.gap}px`;
      tooltip.classList.add('isOpening');
    }
  }

  handleOpenTooltip(event) {
    this.isOpen = true;
    this.savedData = {
      x: event.pageX,
      y: event.pageY
    }
  }

  handleCloseTooltip() {
    const tooltip = this.shadowRoot.querySelector('.tooltip-content');
    tooltip.classList.replace('isOpening', 'isClosing');
    setTimeout(() => { this.isOpen = false; }, 200);
  }

  render() {
    return html`
      <div
        class="tooltip-wrapper"
        @mouseenter=${this.handleOpenTooltip}
        @mouseleave=${this.handleCloseTooltip}
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