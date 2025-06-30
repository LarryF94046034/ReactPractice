import Nav from "./Nav";
import Info from "./Infoo";
import Info1 from "./Infoo1";
import Infoo2 from "./infoo2";

function App() {
  let friends = ["小明", "小華", "小張"];
  let friends1 = [
    { name: "小明", age: 16 },
    { name: "小明", age: 17 },
    { name: "小明", age: 18 },
  ];
  return (
    <div>
      <Nav />
      <Infoo2 />
      //props
      <Info name={friends[0]} age={16} />
      <Info name={friends[1]} age={17} />
      <Info name={friends[2]} age={18} />
      //object destructing
      {friends1.map((friend) => (
        <Info1 name={friend.name} age={friend.age} />
      ))}
    </div>
  );
}

export default App;
