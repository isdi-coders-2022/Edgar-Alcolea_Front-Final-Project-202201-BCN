import styled from "styled-components";

const LoadingStyle = styled.div`
  .load-wrapp {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding: 20px 20px 20px;
    border-radius: 5px;
    background-color: #d8d8d8;
  }

  .spinner {
    position: relative;
    width: 95px;
    height: 95px;
    margin: 0 auto;
    top: 50px;
  }

  .bubble-1,
  .bubble-2 {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.primary};
  }

  .bubble-2 {
    top: auto;
    bottom: 0;
  }

  .l-9 {
    animation-delay: 1.44s;
  }

  .load-9 .spinner {
    animation: loadingI 2s linear infinite;
  }
  .load-9 .bubble-1,
  .load-9 .bubble-2 {
    animation: bounce 2s ease-in-out infinite;
  }
  .load-9 .bubble-2 {
    animation-delay: -1s;
  }

  @keyframes loadingI {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="load-9">
        <div className="spinner">
          <div className="bubble-1"></div>
          <div className="bubble-2"></div>
        </div>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
