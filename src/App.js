import "./App.css";
import ToggleSwitch from "./ToggleSwitch.jsx";

function App() {
  return (
    <div className="App">
      <ToggleSwitch size="small" color="#ff9900"></ToggleSwitch>
      <ToggleSwitch size="normal"></ToggleSwitch>
      <ToggleSwitch size="big"></ToggleSwitch>
    </div>
  );
}

export default App;
