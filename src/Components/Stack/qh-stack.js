import { LitElement, customElement, html, css, property, unsafeCSS } from 'lit-element';

@customElement('qh-stack')
export class Stack extends LitElement {
  @property({ type: Boolean }) horizontal = false;
  @property({ type: Number }) gap = 0;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      :host([horizontal]) {
        flex-direction: row;
      }
    `;
  }

  render() {
    return html`
      <style>
        :host > ::slotted(div:not(:last-child)) {
          margin-bottom: ${unsafeCSS(this.gap)}px;
        }

        :host([horizontal]) > ::slotted(div:not(:last-child)) {
          margin-bottom: inherit;
          margin-right: ${unsafeCSS(this.gap)}px;
        }
      </style>
      <slot></slot>
    `;
  }
}