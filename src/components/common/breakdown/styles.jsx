import styled from 'styled-components';

const BreakdownStyled = styled.div`

    width: 40vw;
    
    .breakdown-div {
      border: 1px solid yellow;
      height: 300px;

      svg {
        border: 1px solid green;
        margin-top: 5vh;

      }
    }
    .text-block-top {
        width: 30%;
    }

    .text-block-bottom {

    }

    .row-top {
        margin-bottom: 8vh;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        vl {
          border-left: 1px solid white;
          height: 50px;
          position: absolute;
          margin: 0;
        }
    }

    .row-bottom {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
    }
`;

export default BreakdownStyled;