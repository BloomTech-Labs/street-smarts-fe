import React from "react";
import niceEmoji from "../../../assets/images/nice-emoji.png";

const Trees = ({ trees }) => {
  return (
    <div className="trees">
      <Emojis number_of_trees_to_offset={trees.number_of_trees_to_offset} />
      <p>{trees.trees_burned_emoji}</p>
    </div>
  );
};

function Emojis({ number_of_trees_to_offset }) {
  return (
    <p id='niceEmoji' className="emojis">
      CO<sub>2</sub> emitted 
      <br></br>= <br></br>
      {number_of_trees_to_offset} trees burned
      <br></br>
      {number_of_trees_to_offset === 0 ? (
        <img src={niceEmoji} alt="nice emoji" />
      ) : (
        <span role="img" aria-label="string">
          {getEmojiForNumTrees(number_of_trees_to_offset)}
        </span>
      )}
    </p>
  );
}

function getEmojiForNumTrees(number_of_trees_to_offset) {
  if (number_of_trees_to_offset >= 600) {
    return "🏭😷";
  } else if (number_of_trees_to_offset >= 400) {
    return "🙁";
  } else if (number_of_trees_to_offset >= 100) {
    return "😐";
  } else if (number_of_trees_to_offset >= 1) {
    return "🙂";
  } else {
    return "😀";
  }
}

export default Trees;
