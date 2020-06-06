import React from 'react';

const CompareButton = ({ onClick }) => {
    return (
        <div className='handOnHover compare-button' onClick={onClick}>
            <p>Compare</p>
        </div>
    );
};

export default CompareButton;