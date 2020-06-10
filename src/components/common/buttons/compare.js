import React from 'react';
import ButtonStyled from './styles';

const CompareButton = ({ onClick }) => {
  return (
    <ButtonStyled>
      <div className='button' onClick={onClick}>
        <p>Compare</p>
      </div>
    </ButtonStyled>
  );
};

export default CompareButton;