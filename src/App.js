import React from 'react';
import { ReactDOM } from 'react';
import "./output.css";

function Header() {
  return(
    <>
    <header className="App-header h-40 inline-flex flex-row text-cyan-200 text-6xl p-5 rounded-lg border p-1">
      <h1 className=''>
        Eric Dowds -
        Aspiring Software Engineer.
      </h1>
    {/*<p className='text-cyan-200 flex-auto mx-auto'>This website is currently under construction and will soon be a shiny React app!</p>*/}
    </header>
  </>
  )
}

function Photo() {
  return(
  <div className='inline-flex flex-row p-1'>
    <img src='./profile.png' alt='profile' className='flex h-100 w-100
    items-center justify-center rounded-full border'
     height="300" width="300"></img>
  </div> 
  )}


function App() {
  return (
    <div className='columns-2 gap-5 inline-flex flex-col'>
    <Header />
    <Photo />
    </div>
  );
}

export default App;
