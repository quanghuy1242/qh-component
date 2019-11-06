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

export type AlignmentType =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

@customElement('qh-stack')
export class Stack extends LitElement {
  @property({ type: Boolean }) public horizontal: boolean = false;
  @property({ type: Number }) public gap: number = 0;
  @property({ type: String }) public verticalAlign: AlignmentType = 'start';
  @property({ type: String }) public horizontalAlign: AlignmentType = 'start';

  public static get styles(): CSSResult {
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

  protected render(): TemplateResult {
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
