import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Chào mừng bạn đến với khóa học React js</h2>
        <p>
          Để biết thoong tin chi tiet <code>src/App.js</code> vao day.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hoc React JS
        </a>
      </header>
    </div>
  );
}

export default App;
