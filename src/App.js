import React from 'react';
//import { ReactDOM } from 'react';
import './App.css';

function Header() {
  return (
    <>
      <header>
        <h1>
          Eric Dowds -
          Aspiring Software Engineer.
        </h1>
        {/*<p className='text-cyan-200 flex-auto mx-auto'>This website is currently under construction and will soon be a shiny React app!</p>*/}
      </header>
    </>
  )
}

function Photo() {
  return (
    <div>
      <img src='./profile.png' alt='profile'
        height="300" width="300" />
    </div>
  )
}


function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <Header />
        <Photo />
      </div>

      <div className='Main-content'>
        <p> </p>
      </div>
    </div>
  );
}

export default App;
