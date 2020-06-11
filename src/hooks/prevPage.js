import React from "react";
import { withRouter as prevPage } from "react-router-dom";
import chevronUp from "../assets/images/chevron-up.png";

export default prevPage(({ history }) => {
  return (
    <div className='handOnHover chevron' onClick={() => history.goBack()} style={{display: 'flex', flexDirection: 'column' , alignContent: 'center'}}>
      <img src={chevronUp} alt="Back to car details" />
      <p>Back to details</p>
    </div>
  );
});
