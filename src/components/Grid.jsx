import React from "react";

const Grid = ({ rows = 15, cols = 100, size = 22 }) => {
  const lines = [];

  // Linhas horizontais com fade
  for (let i = 0; i <= rows; i++) {
    const opacity = 1 - i / rows; // topo 100%, base 0%
    lines.push(
      <div
        key={`h-${i}`}
        className="absolute bg-gradient-to-b from-white/20  to-white/2"
        style={{
          top: i * size + "px",
          left: 0,
          width: cols * size + "px",
          height: "1px",
          opacity: opacity,
        }}
      />
    );
  }

  // Linhas verticais normais
  for (let j = 0; j <= cols; j++) {
    lines.push(
      <div
        key={`v-${j}`}
        className="absolute bg-gradient-to-b from-white/4  to-white/2"
        style={{
          left: j * size + "px",
          top: 0,
          height: rows * size + "px",
          width: "1px",
        }}
      />
    );
  }

  return (
    <div
      className="relative "
      style={{ width: cols * size, height: rows * size }}
    >
      {lines}
    </div>
  );
};

export default Grid;
