import './App.css';

function Header() {
  return(
    <div className="App">
    <header className="App-header">
      <h1>
        Eric Dowds - Aspiring Software Engineer.
      </h1>
    </header>
    <p>This website is currently under construction and will soon be a shiny React app!</p>
  </div>
  )
}

function App() {
  return (
    <Header />
  );
}

export default App;
