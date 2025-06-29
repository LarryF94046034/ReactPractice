import React from "react";

const Info = () => {
  let friends = ["小明", "小華", "小張"];
  return (
    <div>
      <p>我的朋友們是:</p>
      {friends.map((friend) => {
        return <p>{friend}</p>;
      })}
      <h1>這是Info組件</h1>
    </div>
  );
};

export default Info;
