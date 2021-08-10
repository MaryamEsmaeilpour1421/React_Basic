//import './App.css';

import Clock from "./State/Clock";
import Info  from "./State/FirstState";
import Event from "./events/Event";

function App() {
  return (
    <div>
      <Info/>
      <Clock/>
      <Event/>
      </div>
  );
}

export default App;
