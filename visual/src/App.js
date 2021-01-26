import './App.css';
import API from './API/API';
import background from "./img/music2.webp";

function App() {
  return (
    <div className="App">
         <div style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <API />
      </header>
      </div>
    </div>
  );
}

export default App;
