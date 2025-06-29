import React from "react";
import "./styles/style.css";

const Info = () => {
  let friends = ["小明", "小華", "小張"];
  return (
    <div className="info">
      <p>我的朋友們是:</p>
      {friends.map((friend) => {
        return <p>{friend}</p>;
      })}
    </div>
  );
};

export default Info;
