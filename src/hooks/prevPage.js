import React from "react";
import { withRouter } from "react-router-dom";
import chevronUp from "../assets/images/chevron-up.png";

export default withRouter(({ history }) => {
  return (
    <div className='chevron' onClick={() => history.goBack()}>
      <img src={chevronUp} alt="Back to car details" />
    </div>
  );
});
