import { LitElement, customElement, html, css } from 'lit-element';

import '../Components/Tooltip/qh-tooltip';
import '../Components/CircularProgress/qh-circular-progress';

@customElement('app-demo')
export class AppDemo extends LitElement {
  static get styles() {
    return css`
      qh-circular-progress {
        --mdc-theme-primary: #416275;
      }
    `;
  }
  render() {
    return html`
      <qh-tooltip content="Đẹp trai">
        <button id="btn-tooltip">Bạn Huy có một đặc điểm là rất</button>
      </qh-tooltip>
      <qh-circular-progress size="xlarge" center></qh-circular-progress>
    `;
  }
}