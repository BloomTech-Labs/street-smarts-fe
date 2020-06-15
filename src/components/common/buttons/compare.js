import React from 'react';
import ButtonStyled from './styles';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CompareButton = ({ onClick }) => {
  const { id } = useParams();

  return (
    <>
      <ButtonStyled>
        <Link to={`/compare/${id}`}>
          <div className='button' onClick={onClick}>
            <p>Compare</p>
          </div>
        </Link>
      </ButtonStyled>
    </>
  );
};

export default CompareButton;