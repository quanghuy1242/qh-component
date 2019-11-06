import { LitElement, customElement, html, css, TemplateResult, CSSResult } from 'lit-element';

import '../Components/Tooltip/qh-tooltip';
import '../Components/CircularProgress/qh-circular-progress';
import '../Components/Stack/qh-stack';

@customElement('app-demo')
export class AppDemo extends LitElement {
  public static get styles(): CSSResult {
    return css`
      qh-circular-progress {
        --mdc-theme-primary: #416275;
      }
    `;
  }

  protected render(): TemplateResult {
    return html`
      <qh-tooltip content="Đẹp trai">
        <button id="btn-tooltip">Bạn Huy có một đặc điểm là rất</button>
      </qh-tooltip>
      <qh-circular-progress size="xlarge" center></qh-circular-progress>
      <qh-stack horizontal gap=${16}>
        <div>aaaaaaaaaaaaaaa</div>
        <div>bbbbbbbbbbbbbbb</div>
      </qh-stack>
    `;
  }
}