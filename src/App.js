import React, { Component } from 'react';
import Card from './components/FirstPage';
import './App.css';
import titan from './Titan.json';

function shuffleTiles(titanArray) {
  for (let i = titanArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const shift = titanArray[i];
    titanArray[i] = titanArray[j];
    titanArray[j] = shift;
  }
  return titanArray;
};

class App extends Component {
  state = {
    titan,
    score: 0,
    highScore: 0
  };

  highScoreCheck() {
    let highScore = this.state.highScore;
    if (this.state.score >= highScore) {
      highScore = this.state.score;
    }
    else {
      highScore = this.state.highScore;
    }
    return highScore;
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li className="brand">
              <a href="/">Clicky Game</a>
            </li>
            <li className="">You guessed incorrectly!</li>
            <li>Score: {this.state.score} | Top Score: {this.state.highScore}</li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
        {/* <button onClick={() => this.setState({ counter: this.state.counter + 1 })}></button> */}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.titan.map((titan, i) => (
          <Card
            key={titan.id}
            image={titan.image}
            onCardClick={() => {
              if (this.state.titan[i].clicked === false) {
                console.log("card click from App " + titan.image)
                const newTitan = [...this.state.titan];
                newTitan[i].clicked = true;
                this.setState({
                  score: this.state.score + 1,
                  titan: shuffleTiles(newTitan)
                });
              } else {
                console.log("U haz lost.")

                const resetTitan = [...this.state.titan].map(t => {
                  let t2 = { ...t };
                  t2.clicked = false;
                  return t2;
                })

                //let switchedTiles = shuffleTiles(titan);
                this.setState({
                  highScore: this.highScoreCheck(),
                  score: 0,
                  titan: shuffleTiles(resetTitan)
                });
                //this.setState({ titan: switchedTiles });
              }
            }}
          />
        ))}
      </div>
    );
  }
}


export default App;
