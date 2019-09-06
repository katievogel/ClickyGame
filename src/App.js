import React from 'react';
import FirstPage from './components/FirstPage';
import './App.css';

var images = ['Titan.jpg', 'titan_chubby.jpg', "titan_hide_nose.jpg", "titan_jedi.jpg", "titan_kitten.jpg", "titan_post_turkey.jpg", "titan_tucked_in.jpg", "titan_windowsill.jpg"];

function Card (props) {
  return (
    <div className="">
      <img src={props.image}/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <li className="">You guessed incorrectly!</li>
          <li>Score: 0 | Top Score: 3</li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </header>
      {images.map(images => (
        <Card image={images}/>
      ))}
      </div>
  );
}


export default App;
