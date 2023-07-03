import { useState } from "react";
// Write your Color component here





const App = () => {
  const [seclectedColor, setSelectedColor] = useState("")

  const Color = ({color, setSelectedColor}) => {
    return ( <div 
    className={color}
    onClick={() => setSelectedColor(color)}
    ></div>
    )
  }
  
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={seclectedColor}>{seclectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
