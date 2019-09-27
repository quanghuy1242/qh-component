import { css } from "lit-element";
import { animationStyles } from '../Animations/animations.style';

export const tooltipStyles = css`
  ${animationStyles}

  .tooltip-wrapper {
    display: inline-block;
    position: relative;
  }

  .tooltip-content {
    position: absolute;
    background-color: gray;
    color: white;
    animation-duration: 200ms;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    color: white;
    border-radius: 4px;
    max-width: 250px;
    padding: 6px 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10px;
  }

  .bottom {
    transform: translate(-50%, 1rem);
    left: 50%;
  }

  .tooltip-content.isOpening {
    animation-name: fade-in;
  }

  .tooltip-content.isClosing {
    animation-name: fade-out;
  }
`;