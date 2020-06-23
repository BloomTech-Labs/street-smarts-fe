// A gauge that shows where a value is between min and max
//
// Modified from https://github.com/skarpyak/react-horizontal-gauge/blob/master/src/react-horizontal-gauge.js
import React from "react";

const defaultProps = {
  value: 0,
  max: 100,
  min: 0,
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  // if (!props.text) {
  //     props.text = "" + props.value;
  // }

  // Calculate the value as a percentage from 0 (min) to 100 (max)
  function calcAxisPos(val) {
    const percent = (100 * (val - props.min)) / (props.max - props.min);
    const res = (percent / 100) * 90;
    return res;
  }

  const width = props.width;
  const height = props.height;

  return (
    <svg {...{width, height}} className={props.className}>
      <svg
        viewBox="0,0,100,100"
        preserveAspectRatio="none"
        x="5%"
        y="30%"
        width="90%"
        height="70%"
      >
        <defs>
          <linearGradient id="gradient" spreadMethod="pad">
            <stop offset="0%" stopColor="#04B072" stopOpacity="1" />
            <stop offset="50%" stopColor="#FBFF49" stopOpacity="1" />
            <stop offset="100%" stopColor="#A20101" stopOpacity="1" />
          </linearGradient>
        </defs>
        <polygon points="0,100, 100,100, 100,0" fill="url(#gradient)" />
      </svg>

      <svg
        id="indicator"
        viewBox="-25,-25,50,50"
        preserveAspectRatio="xMidYMid meet"
        width="10%"
        height="30%"
        x={calcAxisPos(props.value) + "%"}
        style={{overflow: "visible"}}
      >
        <g fill="white">
          <text 
            className='co2-text'
            id="indicatorText"
            textAnchor="middle"
            x="0"
            y="0"
          >
            {props.text}
          </text>
          <polygon points="-10,5 0,25 10,5" />
        </g>
      </svg>
    </svg>
  );
};
