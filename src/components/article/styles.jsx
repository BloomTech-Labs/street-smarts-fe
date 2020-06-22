import styled from 'styled-components';

const ArticleStyled = styled.div`
  h1, h2, h3, h4, p, a, li {
    color: black;}

  section {
    width: 70vw;
    margin: auto;
    display: flex:
    justify-content: center;
    align-items: center;}

    .hero-text {
      z-index: 4;
      padding: 9%;
      text-align: center;
      h1, h3 {
        color: white;}}

    .article-text {
      background-color: white;
      color: black;
      padding: 5%;
    
      .visually-embed {
        display: flex:
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 0px;
      }}
    
    h2 {
      padding-top: 3vh;
      padding-bottom: 2vh;}
    
    a {
      font-weight: bold;  }

    figcaption {
      text-align: center;
      margin: 5%;
      a {
        color: white;
        font-weight: normal}}


  .team-title {
    padding: 1vh;
    padding-top: 3vh;
    text-align: center;
  }
  .team {
    margin: 0 auto 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly}

    .teamMember {
      width: 15vw;
      margin: 3% 0;
      display: flex;
      flex-direction: column;
      align-items: center;}

    .content {
      text-align: center;
      flex-direction: column;}

    .member-photo {
      height: 15vh;
      border-radius: 50%;}

      .icons img {
        height: 25px;
        margin: 1vh;}
    }

`;

export default ArticleStyled;