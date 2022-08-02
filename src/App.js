import React from 'react';
import { ReactDOM } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Header() {
  return(
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
  return(
  <div className='col-md-6'>
    <Image src='./profile.png' alt='profile'
     height="300" width="300" fluid roundedCircle/>
  </div> 
  )}


function App() {
  return (
    <Container fluid>
      <Row>
        <Col><Header /></Col>
        <Col><Photo /></Col>
      </Row>
    </Container>
  );
}

export default App;
