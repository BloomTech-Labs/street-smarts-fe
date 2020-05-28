import React from "react";
import { Link } from "react-router-dom";
import { singleCarSubmitError } from './modal';

function SingleCarSearch({ yearSelected, makeSelected, modelSelected }){ 
  return(
    <>
      {yearSelected ? (
        <Link to={`/${makeSelected}/${modelSelected}/${yearSelected}`}>
          <div className="button">
            <p>Submit</p>
          </div>
        </Link>
      ) : modelSelected ? (
        <Link to={`/${makeSelected}/${modelSelected}`}>
          <div className="button">
            <p>Submit</p>
          </div>
        </Link>
      ) : (
        <div className="button">
          <a href='#dropdownForm' onClick={singleCarSubmitError}>
            <p>Submit</p>
          </a>
        </div>)
      }
    </>
  )};

export default SingleCarSearch;