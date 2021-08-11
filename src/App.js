import './App.css';
import { Colors } from './components/Colors'

function App() {
  return (
    <div className="App">
      <h1>Color palette generator</h1>
      <Colors />
      <button>Generte palette</button>
      <p>Or press spacebar</p>
      <p className="info">click to copy individual color, or press C to copy all palette</p>
    </div>
  );
}

export default App;
