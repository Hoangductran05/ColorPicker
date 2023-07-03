import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const Color = ({ color, setSelectedColor }) => {
    const isSelected = selectedColor === color;
    const colorClassName = isSelected ? `color ${color} selected` : `color ${color}`;

    return (
      <div className={colorClassName} onClick={() => setSelectedColor(color)}></div>
    );
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`color ${selectedColor}`}>{selectedColor}</div>
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
