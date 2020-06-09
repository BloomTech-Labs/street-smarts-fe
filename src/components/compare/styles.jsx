import styled from "styled-components";
import HorizontalGauge from "../common/gauge";

export const CompareCarsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 30vh repeat(3, auto);
  grid-auto-flow: column;
  gap: 4%;
  justify-items: center;
`;

export const BreakdownContainer = styled.div`
  width: 30vw;

  .text-block-top {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 0.7rem;
  }

  .row-top {
    margin-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }

  .row-bottom {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }

  .vertical-divider-1 {
    height: calc(100% - 30px);
    min-height: 50px;
    margin-top: 15px;
  }
`;

export const CarImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CarbonGaugeContainer = styled.div`
  h3 {
    text-align: center;
    font-size: 0.7rem;
  }
`;

export const CarbonGauge = styled(HorizontalGauge)`
  width: 250px;
  height: 75px;
`;
