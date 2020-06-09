import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; 
    margin-top: 5em;

    .main-wrapper {
        display: flex;
        padding: 10em 0;     
    }

    .breakdown-container {
        width: 50%;
    }

    .search-container {
        padding: 10em;
        width: 50%;
    }

    .vertical-divider {
        margin-top: 15em;
        margin-right: 5em;
        margin-left: 5em;
        height: 30em;
    }

    .main-car-images-container {
        position: relative;
        left: 25%;
        padding-bottom: 2em;
        width: 150%;
    }

    .gauge {
      margin-top: 2.5em;
      align-content: center;
      width: 150%;
      height: 40%;
      .co2-text {
        font-size: 2.5em;
      }

    }
`;
