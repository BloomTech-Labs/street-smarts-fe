import React from 'react';
import styled from 'styled-components';

const CarDetailsStyles = styled.div`
  .carDetails {
    display: flex;
    justify-content: space-between;
    background-color: rgb(0,0,0);
    border: none;
    .ant-card-body {
      padding: 0;
      margin-top: 10vh;
      margin-bottom: 10vh;
    }

    .carText {
      width: 35%;
      background-color: rgba(0,0,0,0);
      border: none;

      .divider {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    .carImg {
      width: 50%;
      background-color: rgba(0,0,0,0);
      border: none;
      padding: 0px;

      svg {
        width: 100%;
      }
      rect {
        width: 100%
      }
      // .gauge {
      //   width: 50%;
      // }
      .cto {
        font-size: 2rem;

      }
    }
  }
`;

export default CarDetailsStyles;