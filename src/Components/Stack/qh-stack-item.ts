import { LitElement, customElement, html, css, property, TemplateResult, CSSResult } from 'lit-element';

@customElement('qh-stack-item')
export class StackItem extends LitElement {
  @property({ type: String }) a: any;
  public static get styles(): CSSResult {
    return css`

    `;
  }

  protected render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}