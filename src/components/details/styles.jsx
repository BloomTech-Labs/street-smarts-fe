import styled from 'styled-components';

const CarDetailsStyles = styled.div`
  .carDetails {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgb(0,0,0);
    border: none;
    @media (max-width: 1100px) {
      width: 200%;
      justify-content: center;
      flex-direction:column-reverse;
    }

    #niceEmoji {
      img {
        width: 3em;
      }
    }

    .emojis {
      font-weight: bolder;
    }
    .ant-card-body {
      padding: 0;
      margin-top: 10vh;
      margin-bottom: 10vh;

      @media (max-width: 1100px) {
        margin-bottom: 0vh;
        margin-top: 5vh;
      }
    }

    .carText {
      width: 45%;
      background-color: rgba(0,0,0,0);
      border: none;

      .divider {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    .carImg {
      width: 45%;
      background-color: rgba(0,0,0,0);
      border: none;
      padding: 0px;

      @media (max-width: 1100px) {
        width: 50%;
      }

      svg {
        width: 100%;
      }
      rect {
        width: 100%
      }

      .cto {
        font-size: 2rem;
      }
    }
  }
  .gauge {
      width: 100%;
      height: 40%;
      .co2-text {
        font-size: 16px;
      }
  }
  .mpg {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      text-align: center;
    }
    vl {
      border-left: 1px solid white;
      height: 50px;
      position: absolute;
      margin: 0;
    }
  }
  .compare-button {
    margin:20%;
    text-align: center;
  }

  .trees {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .eco-driving-link {
    text-align: center;
  }

`;

export const Fullscreen = styled.button`
    background: transparent;
    border: none;
    width: 22%;
    height: 16%;

    @media (max-width: 1100px) {
      right: 15%;
      height: 50px;
    }
`;

export default CarDetailsStyles;