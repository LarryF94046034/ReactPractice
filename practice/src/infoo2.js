import React from "react";
import { useState } from "react";
import "./styles/style.css";

const Infoo2 = () => {
  let [name, setName] = useState("小明");
  let age = 20;

  const changeNameHandler = () => {
    setName("小明先生");
  };

  return (
    <div className="info">
      <h1>朋友名稱:{name}</h1>
      <h1>朋友年齡:{age}</h1>
      <button onClick={changeNameHandler}>改名按鈕</button>
    </div>
  );
};

export default Infoo2;
