import logo from './logo.svg';
import './App.css';
import DRFApiFetch from './components/DRFApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DRFApiFetch />
      </header>
    </div>
  );
}

export default App;
