import { css } from "lit-element";
import { animationStyles } from '../Animations/animations.style';

export const styles = css`
  ${animationStyles}

  .tooltip-wrapper {
    display: inline-block;
  }

  .tooltip-content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.25rem 0.5rem;
    background-color: gray;
    color: white;
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  }

  .tooltip-content.isOpening {
    animation-name: fade-in;
  }

  .tooltip-content.isClosing {
    animation-name: fade-out;
  }
`;