import { styled } from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="spinner">
        Loading...
        <div className="spinner-sector spinner-sector-1"></div>
        <div className="spinner-sector spinner-sector-2"></div>
        <div className="spinner-sector spinner-sector-3"></div>
        <div className="spinner-sector spinner-sector-4"></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  .spinner-sector {
    position: absolute;
    width: 100%;
    border-radius: 50%;
    border: 15px solid transparent;
    mix-blend-mode: overlay;
    animation: rotate var(--duration) var(--timing) infinite;
    pointer-events: none;
  }

  .spinner-sector-1 {
    border-top-color: lightcoral;
    --duration: 1.5s;
    --timing: ease-in-out;
  }
  .spinner-sector-2 {
    border-left-color: lightblue;
    --duration: 2s;
    --timing: ease-in;
  }
  .spinner-sector-3 {
    border-right-color: lightgreen;
    --duration: 2.5s;
    --timing: ease-out;
  }
  .spinner-sector-4 {
    border-right-color: yellow;
    --duration: 3s;
    --timing: ease-out;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes text-color {
    0% {
      color: rgba(0, 0, 0, 1);
    }
    50% {
      color: rgba(0, 0, 0, 0.5);
    }
    100% {
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;
