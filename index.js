import { html, render } from 'lit-html';

import './src/Components/Tooltip/qh-tooltip';
import './src/Components/CircularProgress/qh-circular-progress';

render(
  html`
    <style>
      * {
        margin: 0 auto;
      }

      body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }

      qh-circular-progress {
        --mdc-theme-primary: #416275;
      }

    </style>
    <qh-tooltip content="Đẹp trai">
      <button id="btn-tooltip">Bạn Huy có một đặc điểm là rất</button>
    </qh-tooltip>
    <qh-circular-progress size="xlarge" center></qh-circular-progress>
  `,
  document.body
)