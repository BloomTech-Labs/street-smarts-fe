import styled from 'styled-components';

const AppStyle = styled.div`
h1, h2, h3, p, a {
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
p {
  font-size: 1rem;
  line-height: 1.5rem;
}
a {
  text-decoration: none!important;
  color: #FFFFFF;
}

  .layout {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: rgb(0,0,0);
    color: #FFFFFF;
    border: none;

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

      .navlink {
        text-decoration: none!important;
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: bold;
      }
  
      .menu {
        background-color: rgba(0,0,0,0);
        color: white;
        border: none;
        li {
          padding: 0;
          margin-left: 3vw;
        }
      }
    }
    main {
      min-height: 90vh;
    }
    .content {
      width: 70%;
      display: flex;
      justify-content: space-evenly;
      background-color: rgba(0,0,0,0);
      color: #FFFFFF;
      border: none;
      margin: auto;

      * {
          flex-grow: 1;
      }
    }
    
    .footer {
      width: 100%;
      display: flex;
      justify-content: center;
      position: sticky;
      bottom: 0px;
      z-index: 1;
      text-align: center;
      color: #FFFFFF;
      background-color: rgb(0,0,0);
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

    .main-car-bd {
        display: flex;
        flex-direction: column;

    .row {
        display: flex;
        flex-direction: row;
        align-items: space-between;
    }
    .top {
        width: 200%;
        margin-bottom: 5%;
    
    }
    .bottom {
        width: 200%;
    }
    .text-block {
        padding-left: 4%;
    }

    .vertical-divider-1 {
        height: 5em;
        margin-top: 1em;
    }
  } 

  }  
`;

export default AppStyle;
