
import styled from 'styled-components';

const ResultsStyled = styled.div`
  .home-results-title {
    margin-top: 10;
    margin-bottom: 10;
  }
  .ant-card-head-title {
    flex-wrap: wrap;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
  }
  .ant-list-item {
    width: 50em;
    @media (max-width: 1100px) {
      width: 40em;
    }
  }
  .ant-card-body {
    padding: 0.5em 0 0 1em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  
    li {
      font-size: 1.1rem;
      color: black;
    }
  }
`;

export default ResultsStyled;