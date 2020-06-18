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

export const CarImgContainer = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare-search {
      p {
        background-color: black;
      }
  }
`;

export const DividerCol = styled(Divider)`
  grid-row: 2 / 5;
  height: 100%;
`;
