import { LitElement, customElement, html, css, TemplateResult, CSSResult } from 'lit-element';

import '../components/qh-tooltip/qh-tooltip';
import '../components/qh-circular-progress/qh-circular-progress';

@customElement('app-demo')
export class AppDemo extends LitElement {
  public static get styles(): CSSResult {
    return css`
      qh-circular-progress {
        --mdc-theme-primary: #416275;
      }

      .demo-stack {
        height: 200px;
        width: 500px;
      }
    `;
  }

  protected render(): TemplateResult {
    return html`
      <qh-tooltip content="Đẹp trai">
        <button id="btn-tooltip">Bạn Huy có một đặc điểm là rất</button>
      </qh-tooltip>
      <qh-circular-progress size="xlarge" center></qh-circular-progress>
    `;
  }
}