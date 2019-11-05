import {
  LitElement,
  customElement,
  html,
  css,
  property,
  unsafeCSS,
  TemplateResult,
  CSSResult
} from 'lit-element';

@customElement('qh-stack')
export class Stack extends LitElement {
  @property({ type: Boolean }) horizontal: boolean = false;
  @property({ type: Number }) gap: number = 0;

  static get styles(): CSSResult {
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

  render(): TemplateResult {
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