import { css } from "lit-element";

export const animationStyles = css`
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