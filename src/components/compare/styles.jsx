import styled from "styled-components";
import HorizontalGauge from "../common/gauge";
import { Divider } from 'antd';

export const CompareCarsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) repeat(auto-fit, 10px minmax(250px, 1fr));
  grid-template-rows: 30vh repeat(3, auto);
  grid-auto-flow: column;
  gap: 4%;
  justify-items: center;
`;

export const BreakdownContainer = styled.div`

  .text-block-top {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    line-height: 1rem;
    font-size: 0.7rem;
  }

  h1 {
    font-size: 1rem;
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
    align-items: center;
  }

  .vertical-divider-1 {
    height: calc(100% - 30px);
    min-height: 50px;
    margin-top: 15px;
    margin: 0 0.5em;
  }

  .vertical.split {
    height: 100%;
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

export const CompareSearchContainer = styled.div`
  grid-row: 1 / span 4;
`;

export const DividerCol = styled(Divider)`
  grid-row: 2 / 5;
  height: 100%;
`;