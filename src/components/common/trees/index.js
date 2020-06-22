import React from "react";
import niceEmoji from "../../../assets/images/nice-emoji.png";

const Trees = ({ trees }) => {
  return (
    <div className="trees">
      {trees.number_of_trees_to_offset === 0 ? (
        <p id="niceEmoji" className="emojis">
        CO<sub>2</sub> emitted = {trees.number_of_trees_to_offset} trees burned
          <img src={niceEmoji} alt="nice emoji" />
        </p>
      ) : trees.number_of_trees_to_offset >= 600 ? (
        <p className="emojis">
        CO<sub>2</sub> emitted = {trees.number_of_trees_to_offset} trees burned
          <span role="img" aria-label="string">
            🏭😷
          </span>
        </p>
      ) : trees.number_of_trees_to_offset >= 475 ? (
        <p className="emojis">
        CO<sub>2</sub> emitted = {trees.number_of_trees_to_offset} trees burned
          <span role="img" aria-label="string">
            🙁
          </span>
        </p>
      )
      : trees.number_of_trees_to_offset >= 100 ? (
        <p className="emojis">
          CO<sub>2</sub> emitted 
          <br></br>=<br></br>
          {trees.number_of_trees_to_offset} trees burned
          <br></br>
          <span role="img" aria-label="string">
            😐
          </span>
        </p>
      )  : trees.number_of_trees_to_offset >= 0 ? (
        <p className="emojis">
          CO<sub>2</sub> emitted 
          <br></br>=<br></br>
          {trees.number_of_trees_to_offset} trees burned
          <br></br>
          <span role="img" aria-label="string">
            🙂
          </span>
        </p>     
      ) : (
        <p className="emojis">
          CO<sub>2</sub> emitted = {trees.number_of_trees_to_offset} trees burned 
          <span role="img" aria-label="string">
            😀
          </span>
        </p>
      )}
      <p>{trees.trees_burned_emoji}</p>
    </div>
  );
};

export default Trees;
