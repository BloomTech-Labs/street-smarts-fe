import styled from "styled-components";
import HorizontalGauge from "../common/gauge";
import { Divider } from 'antd';



export const CompareCarsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) repeat(auto-fit, 10px minmax(250px, 1fr));
  grid-template-rows: 30vh repeat(4, auto);
  grid-auto-flow: column;
  gap: 4%;
  justify-items: center;
  margin-bottom: 18vh;
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
  color: white;
  width: 100%;
  h3 {
    font-size: 1.15em;
    padding-left: 10px;
  }
  h4 {
    color: white;
    padding-left: 10px;
    font-weight: bold;
  }
`;

export const CarbonGauge = styled(HorizontalGauge)`
  width: 90%;
  height: 70px;
`;

export const CompareSearchContainer = styled.div`
  grid-row: 1 / span 4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare-search {
      p {
        background-color: black;
        max-width: 13em;
      }
  }
`;

export const DividerCol = styled(Divider)`
  grid-row: 2 / 6;
  height: 100%;
`;

export const TreesContainer = styled.div`
  text-align:center;
  #niceEmoji {
      img {
        width: 3em;
      }
    }

    .emojis {
      font-weight: bolder;
    }
`
