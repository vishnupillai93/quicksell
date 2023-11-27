import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "dark blue",
          letterSpacing: "4px",
        }}
      >
        Loading QuickSell
      </span>
    </div>
  );
};

export default Loading;
