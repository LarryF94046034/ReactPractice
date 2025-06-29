import React from "react";
import "./styles/style.css";

const Info = (props) => {
  console.log(props);

  return (
    <div className="info">
      <h1>朋友名稱:{props.name}</h1>
      <h1>朋友年齡:{props.age}</h1>
    </div>
  );
};

// const Info = ({ name, age }) => {
//   console.log(props);

//   return (
//     <div className="info">
//       <h1>朋友名稱:{name}</h1>
//       <h1>朋友年齡:{age}</h1>
//     </div>
//   );
// };

export default Info;
