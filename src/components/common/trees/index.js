import React from "react";
import niceEmoji from "../../../assets/images/nice-emoji.png";
import TreesStyled from './styles';

const Trees = ({ trees }) => {
  return (
    <TreesStyled>
      <div className="trees">
        <Emojis number_of_trees_to_offset={trees.number_of_trees_to_offset} />
        <p>{trees.trees_burned_emoji}</p>
      </div>
    </TreesStyled>
  );
};

function Emojis({ number_of_trees_to_offset }) {
  return (
    <div id='niceEmoji' className="emojis">
      <br/>
      <h3>equivalent to burning</h3>
      <h2>{number_of_trees_to_offset} trees</h2>
      <div className='tree-emojis'>
        {number_of_trees_to_offset === 0 ? (
          <img src={niceEmoji} alt="nice emoji" />
        ) : (
          <span role="img" aria-label="string">
            {getEmojiForNumTrees(number_of_trees_to_offset)}
          </span>
        )}
      </div>
    </div>
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