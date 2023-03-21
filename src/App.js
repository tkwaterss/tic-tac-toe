import Square from './Square';
import './App.css';

function App() {
  const string = 'This is a new string';

  return (
    <div className="App">
      <Square data={string}></Square>

    </div>
  );
}

export default App;
