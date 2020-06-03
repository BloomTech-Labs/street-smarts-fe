// A gauge that shows where a value is between min and max
//
// Modified from https://github.com/skarpyak/react-horizontal-gauge/blob/master/src/react-horizontal-gauge.js
import React from "react";

const defaultProps = {
  width: 500,
  height: 80,
  value: 0,
  max: 100,
  min: 0,
  box: { x1: "2%", x2: "96%", y1: "30%", y2: "40%", widthK: 0.96 },
  axis: { x1: "2%", x2: "98%", y1: "20%", y2: "80%", widthK: 0.98 },
  ticks: [
    { label: "0", value: 0 },
    { label: "50", value: 50 },
    { label: "100", value: 100 },
  ],
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  function calcAxisPos(val) {
    return (
      ((val - props.min) * (props.width * props.axis.widthK)) /
      (props.max - props.min)
    );
  }

  return (
    <svg width={props.width} height={props.height}>
      <defs>
        <linearGradient
          id="gradient"
          x1={props.box.x1}
          y1={props.box.y1}
          x2={props.box.x2}
          y2={props.box.y1}
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#04B072" stopOpacity="1"></stop>
          <stop offset="50%" stopColor="#FBFF49" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#A20101" stopOpacity="1"></stop>
        </linearGradient>
      </defs>
      <g transform={`translate(10, 0)`}>
        {/* wedge */}
        <polygon points={"0,75, 470,75, 470,35"} fill={"url(#gradient)"} />

        {/* value indicator */}
        <g transform={`translate(${calcAxisPos(props.value)}, 0)`} fill="white">
          <text textAnchor="middle" x={0} y={props.axis.y1} fontSize="12">
            {props.value}
          </text>
          <polygon points={"-10,20 0,30 10,20"} />
        </g>
      </g>
    </svg>
  );
};