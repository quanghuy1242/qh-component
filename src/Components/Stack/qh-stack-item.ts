import { LitElement, customElement, html, css, property, TemplateResult, CSSResult } from 'lit-element';

@customElement('qh-stack-item')
export class StackItem extends LitElement {
  @property({ type: String }) a: any;
  static get styles(): CSSResult {
    return css`
      
    `;
  }

  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}