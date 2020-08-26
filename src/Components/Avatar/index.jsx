import React from "react";

const Avatar = ({ src }) => {
  return (
    <img
      style={{
        borderRadius: 500,
        maxWidth: 125,
        maxHeight: 125,
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      }}
      src={src}
      alt=""
    />
  );
};

export default Avatar;
