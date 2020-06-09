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

export const BreakdownCard = styled.div`
  padding: 2%;
`;

export const CarImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CarbonGauge = styled(HorizontalGauge)`
  width: 250px;
  height: 75px;
`;
