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

      h1 {
        width: 19em;
        background-color: black;

        @media (max-width: 1100px) {
          width: 19em;
        }

        @media (max-width: 750px) {
          width: 12em;
        }
      }

      #description {
        width: 30em;
        background-color: black;

        @media (max-width: 1100px) {
          width: 28em;
        }      

        @media (max-width: 750px) {
          width: 18em;
        }

      }
    }

    div.dropdownForm {
      width: 70%;
      background-color: rgba(0,0,0,0);
      justify-content: flex-start;
      margin-top: 10vh;
    }
  }

  .home-results {
    @media (max-width: 750px){
      p {
          background-color: black;
          width: 9em;
      }
  }
}

  .results {
    margin-top: 5vh;

    .home-results {
      align-items: stretch;

      p {
        background-color: black;
      }
    }
  }
`;

export default HomeStyled;