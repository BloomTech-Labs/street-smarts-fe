import styled from 'styled-components';

const CarDetailsStyles = styled.div`
  .car-details {
    width: 70vw;
    display: flex;
    justify-content: space-between;
    background-color: rgb(0,0,0);
    border: none;
    .ant-card-body {
      padding: 0;
      margin-top: 10vh;
      margin-bottom: 10vh;
    }

    .car-text {
      width: 45%;
      background-color: rgba(0,0,0,0);
      border: none;

      .divider {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    .car-img {
      width: 45%;
      background-color: rgba(0,0,0,0);
      border: none;
      padding: 0px;
      display: flex;
      justify-content: center;
      text-align: center;

      svg {
        width: 100%;
      }
      rect {
        width: 100%
      }
      .cto {
        font-size: 2rem;
      }
      .compare-button {
        margin: 20%;
      }
      .eco-driving-link {
        width: 25vw;
        border: 2px solid #25D0C6;
        border-radius: 25px;
        margin: 10vw;
        margin-top: 20vh;
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

`;

export const Fullscreen = styled.button`
    background: transparent;
    border: none;
    width: 22%;
    height: 16%;
`;

export default CarDetailsStyles;