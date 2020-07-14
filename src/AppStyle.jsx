import styled from 'styled-components';
import background from './assets/images/background.jpg';

const AppStyle = styled.div`
  h1, h2, h3, p, a, li {
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-transform: uppercase;
  }
  h2 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 2rem;
    text-transform: uppercase;
  }
  h3 {
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;
    text-transform: uppercase;
  }
  p, li {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  a {
    text-decoration: none!important;
    color: #FFFFFF;
  }
  .home {
    background-image: url(${background});
  }
  .layout {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: #FFFFFF;
    border: none;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    overflow-x: hidden;

    .header {
      width: 100%;
      display: flex;
      position: sticky;
      top: 0px;
      padding-left: 15%;
      padding-right: 15%;
      z-index: 1;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(0,0,0);
      color: white;

      @media (max-width: 750px) {
        margin-top: 1em;
        
      }

      .menu {
        background-color: rgba(0,0,0,0);
        color: white;
        border: none;
        display: flex;

        @media (max-width: 1100px) {
          position: absolute;
          right: 0px;
          height: 35em;
          top: 8vh;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
          transform: translateX(100%);
          transition: transform 0.5s ease-in;
          background: linear-gradient(212deg, #189c94, #cae0de);
        }
        .navlink {
          align-items: center;
          text-decoration: none!important;
          color: #FFFFFF;
          text-transform: uppercase;
          font-weight: bold;
    
        }
        li {
          padding: 0;
          margin-left: 3vw;
          list-style: none;
          @media (max-width: 1100px) {
            border: 2px solid black;
            border-radius: 100px;
            padding: 0.6em 1em;
            background-color: black;
          }
        }
      }
    .nav-active {
      transform: translateX(0%);
    }

      .burger {
        display: none;
        cursor: pointer; 

        @media (max-width: 1100px) {
          display: block;
        }
      }
      
      .burger div{
          width: 25px;
          height:5px;
          margin: 5px;
          background-color: #25D0C6;
      }
    }



    main {
      min-height: 90vh;

    }
    .content {
      width: 70%;
      display: flex;
      justify-content: space-evenly;
      color: #FFFFFF;
      border: none;
      margin: auto;      
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: center;
      bottom: 0;
      z-index: 1;
      text-align: center;
      color: #FFFFFF;
      background-color: rgb(0,0,0);

      margin-top: 10em;
      p {
        font-size: .8rem
      }
    }
    .handOnHover {
      cursor: pointer;
    }

    .image-gallery {
      height: auto;
    }

    .image-gallery-image {
      width: 100%;
      height: 65%;
    }

    .fullscreen-button-container {
      position: absolute;
      z-index: 100;
      left: 87%;
        top: 9em;
    }

    .compare-title {
      margin-top: 10em;
      text-align: center;

      h1 {
        background-color: black;
        /* width: max-content; */
      }
    }

    .compare-container {
      background-color: black;
      padding-bottom: 10em;

      @media (max-width:1500) {
        display: flex;
        flex-direction: column;
      }
    } 
         
    .disclaimer {
       font-size: 0.7rem;
       text-align: center;
       padding-bottom:1em;
    }

    .disclaimer-container {
      .disclaimer {
        position: relative;
        top:50px;
        width: 100%;
      }
    }
}


`;

export default AppStyle;