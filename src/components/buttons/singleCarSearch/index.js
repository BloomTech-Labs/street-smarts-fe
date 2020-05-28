import React from "react";
import { Link } from "react-router-dom";
import { singleCarSubmitError } from './modal';
import { countDown } from './submitSingleCarResults';
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  .button{
    margin-right: 50%;
    margin-top: 3%;
    font-size: 1.5rem;
    border: 1px solid #25D0C6;
    text-align: center;
    padding-top: 20px;
    background-color: black;
    
  }
  .buttonText{
    color: #25D0C6;
    font-weight: bold; 
  }
`

function SingleCarSearch({ yearSelected, makeSelected, modelSelected }){ 
  return(
    <ButtonWrapper>
      {yearSelected ? (
        <Link to={`/${makeSelected}/${modelSelected}/${yearSelected}`}>
          <div className="button">
            <p className="buttonText">Submit</p>
          </div>
        </Link>
      ) : modelSelected ? (
        <Link to={`/${makeSelected}/${modelSelected}`}>
          <div className="button">
            <p className="buttonText">Submit</p>
          </div>
        </Link>
      ) : (
        <div className="button">
          <a href='#dropdownForm' onClick={singleCarSubmitError}>
            <p>Submit</p>
          </a>
        </div>)
      }
    </ButtonWrapper>
  )};

export default SingleCarSearch;