import { LitElement, html, css, property, customElement } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

/**
 * ## Property
 * - **size** [String]: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"  
 * - **progress** [Number]:
 * - **max** [Number]:
 * - **min** [Number]:
 * - **center** [notype]: styling the circular progress to the center of it's parrent
 * - style variable : --mdc-theme-primary
 */
@customElement('qh-circular-progress')
export class AppCircularProgress extends LitElement {
  @property({ type: String }) size = "medium";
  @property({ type: Number }) progress;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 1;

  static get styles() {
    return [
      css`
        :host([center]) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circular-progress {
          font-size: 1.5rem;
          position: relative;
          display: inline-block;
          width: 1em;
          height: 1em;
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
          color: var(--mdc-theme-primary);
        }

        .circular-progress--size-xsmall {
          font-size: 1.125rem;
        }

        .circular-progress--size-small {
          font-size: 1.25rem;
        }

        .circular-progress--size-medium {
          font-size: 1.5rem;
        }

        .circular-progress--size-large {
          font-size: 2.25rem;
        }

        .circular-progress--size-xlarge {
          font-size: 3rem;
        }

        .circular-progress--size-xxlarge {
          font-size: 72px;
        }

        .circular-progress--indeterminate .circular-progress__circle {
          animation: circular-progress-indeterminate-bar-rotate 2s linear infinite;
        }

        .circular-progress--indeterminate .circular-progress__path {
          animation: circular-progress-indeterminate-bar-dash 1.5s ease-in-out
            infinite;

          stroke-dasharray: 2.08%, 416%;
          stroke-dashoffset: 0;
        }

        .circular-progress__circle {
          height: 100%;
          width: 100%;
        }

        .circular-progress__path {
          -webkit-transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          fill: none;
          stroke-dasharray: 0, 416%;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          stroke-miterlimit: 20;
          stroke-width: 0.125rem;
          stroke: currentColor;
        }

        .circular-progress--thickerstroke .circular-progress__path {
          stroke-width: 0.25rem;
        }

        /** Overrides for icons */
        .icon .circular-progress {
          font-size: inherit;
        }

        @keyframes circular-progress-indeterminate-bar-rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes circular-progress-indeterminate-bar-dash {
          0% {
            stroke-dasharray: 2.08%, 416%;
            stroke-dashoffset: 0%;
          }
          50% {
            stroke-dasharray: 185.4%, 416%;
            stroke-dashoffset: -72.9%;
          }
          to {
            stroke-dasharray: 185.4%, 416%;
            stroke-dashoffset: -258.33%;
          }
        }
      `
    ];
  }

  calculateRatio(value) {
    if (value < this.min) return 0;
    if (value > this.max) return 1;
    return (value - this.min) / (max - this.min);
  }

  circularStyle(size) {
    return styleMap(
      this.progress !== undefined
      ? {
          strokeDasharray: `${
            2 * Math.PI * (size / 2.4) * this.calculateRatio(this.progress)
          }, 666.66%`
        }
      : undefined
    );
  }

  sizeMap(size) {
    return {
      xsmall: 18,
      small: 20,
      medium: 24,
      large: 36,
      xlarge: 48,
      xxlarge: 72
    }[size];
  }

  render() {
    const sizeNumber = this.sizeMap(this.size);
    return html`
      <div
        class="
          circular-progress 
          circular-progress--size-${this.size} 
          circular-progress--indeterminate 
          circular-progress--thickerstroke
        "
      >
        <svg
          class="circular-progress__circle"
          viewBox="0 0 ${sizeNumber} ${sizeNumber}"
        >
          <circle
            class="circular-progress__path"
            style="${this.circularStyle(sizeNumber)}"
            cx="${sizeNumber / 2}"
            cy="${sizeNumber / 2}"
            r="${sizeNumber / 2.4}"
          />
        </svg>
      </div>
    `;
  }
}