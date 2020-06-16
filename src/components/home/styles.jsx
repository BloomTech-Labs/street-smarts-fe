import styled from 'styled-components';

const HomeStyled = styled.div`
  .hero {
    max-width: 100%;
    background: url(https://unsplash.com/photos/5FGqfV6UjzI);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .hero-text {
      width: 70vw;
      margin-top: 18vh;
      margin-bottom: 10vh;
    }

    div.dropdownForm {
      width: 70%;
      background-color: rgba(0,0,0,0);
      justify-content: flex-start;
      margin-top: 10vh;
    }
  }

  .results {
    margin-top: 5vh;

    .home-results {
      align-items: stretch;
    }
  }
`;

export default HomeStyled;