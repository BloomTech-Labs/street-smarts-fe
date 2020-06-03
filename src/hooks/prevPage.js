import React from "react";
import { withRouter as prevPage } from "react-router-dom";
import cheveronUp from "../assets/images/cheveron-up.png";

export default prevPage(({ history }) => {
  return (
    <div className = 'cheveron' onClick={() => history.goBack()}>
      <img src={cheveronUp} alt="Back to car details" />
    </div>
  );
});
