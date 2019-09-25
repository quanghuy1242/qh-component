import { css } from "lit-element";

export const styles = css`
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

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;