import styled from 'styled-components';

const CostBreakdown = styled.div`
  width: 70vw;
  padding: 0;
  margin-top: 5vh;
  margin-bottom: 10vh;

  .mainContainer {
    padding-top: 5em;
  }

  .costHeader {
    text-align: center;
    padding-bottom: 5vh;
  }

  .breakdown-container{
    display: flex;
    flex-wrap: nowrap;
    width: 60vw;
    margin: 0 auto;
    justify-content: space-around;
    margin-bottom: 4vh;
  }

  .prev-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .compare-button-container {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .compareHeader {
    display: flex;
    justify-content: center;
    margin-bottom: 1vh;
  }
`;

export default CostBreakdown;