import React from 'react';

const CompareButton = ({ onClick }) => {
    return (
        <div className='handOnHover' onClick={onClick}>
            <p>Compare</p>
        </div>
    );
};

export default CompareButton;