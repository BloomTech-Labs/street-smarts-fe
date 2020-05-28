import React from 'react';
import styled from 'styled-components';

const CarDetailsStyles = styled.div`
  .carDetails {
    display: flex;
    justify-content: space-between;
    background-color: rgb(0,0,0);
    border: none;

    .carText {
      width: 30%;
      background-color: rgba(0,0,0,0);
      border: none;

      .divider {
        margin: 10px, 0px;
      }
    }

    .carImg {
      width: 50%;
      background-color: rgba(0,0,0,0);
      border: none;
    }


  }
`;

export default CarDetailsStyles;