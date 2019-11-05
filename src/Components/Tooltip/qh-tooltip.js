import { LitElement, html, css, property, customElement, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import Popper from 'popper.js';

@customElement('qh-tooltip')
export class AppTooltip extends LitElement {
  @query('slot') referenceElement;
  @query('.tooltip-inner') tooltipElement;

  @property({ type: String }) content = 'Nội dung';
  @property({ type: String }) placement = 'bottom';
  @property({ type: Boolean }) isOpen = false;

  static get styles() {
    return [
      css`
        .tooltip-inner {
          position: absolute;
          margin: 0.75rem;
          color: white;
          border-radius: 4px;
          max-width: 250px;
          padding: 6px 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 10px;
          font-family: 'Roboto';
          background-color: rgba(128, 128, 128, 0.8);
          animation-duration: 200ms;
          animation-fill-mode: both;
          animation-timing-function: ease-in-out;
          z-index: 99999999;
          line-height: normal;
        }

        .isOpening {
          animation-name: fade-in;
          animation-delay: 10ms;
        }

        .isClosing {
          animation-name: fade-out;
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `
    ];
  }

  updated() {
    if (this.isOpen) {
      new Popper(this.referenceElement.assignedElements()[0], this.tooltipElement, {
        placement: this.placement,
        positionFixed: true
      });
      this.tooltipElement.classList.add('isOpening');
    }
  }

  handleOpenTooltip() {
    if (!this.isOpen) {
      this.isOpen = true;
    }
  }

  handleCloseTooltip() {
    if (this.tooltipElement) {
      this.tooltipElement.classList.replace('isOpening', 'isClosing');
      setTimeout(() => {
        this.isOpen = false;
      }, 200);
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
        ${this.isOpen
          ? html`
            <div class="tooltip-inner">
              ${unsafeHTML(this.content)}
            </div>
          `
          : null}
        <slot></slot>
      </div>
    `;
  }
}