import React, { Component } from 'react';
import Card from './components/FirstPage';
import WinModal from './components/WinModal';
import LoseModal from './components/LoseModal';
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
    highScore: 0,
    lose_showing: false,
    win_showing: false
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
        <header className="App-header">
          <div className="jumbotron">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </div>
          <ul>
            <li>Score: {this.state.score} | Top Score: {this.state.highScore}</li>
            <li><a href="/">Reset Scores and Try Again</a></li>
          </ul>
        </header>
        <main>
         {/* The commented code below may help you test Wins by displaying the JSON on the page, though it moveds the tiles, or you can see them log in the console watch the names of each picture as you click*/}
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
          {this.state.titan.map((titan, i) => (
            <Card
              key={titan.id}
              image={process.env.PUBLIC_URL + titan.image}
              onCardClick={() => {
                if (this.state.titan[i].clicked === false) {
                  console.log("card click from App " + titan.image)
                  const newTitan = [...this.state.titan];
                  newTitan[i].clicked = true;
                  var nextScore = this.state.score + 1;
                  this.setState({
                    score: nextScore
                  });
                  if (nextScore === 12) {
                    console.log("U haz won!");
                    this.setState({
                      highScore: nextScore,
                      win_showing: true
                    });

                  } else if (this.state.score !== 12) {
                    this.setState({
                      score: this.state.score + 1,
                      titan: shuffleTiles(newTitan)
                    });
                  }
                } else {
                  console.log("U haz lost.")
                  const resetTitan = [...this.state.titan].map(t => {
                    let t2 = { ...t };
                    t2.clicked = false;
                    return t2;
                  })
                  this.setState({
                    highScore: this.highScoreCheck(),
                    score: 0,
                    titan: shuffleTiles(resetTitan),
                    lose_showing: true
                  });
                }
              }}
            />
          ))}
        </main>
        <WinModal win_showing={this.state.win_showing}
          close={this.close} />
        <LoseModal lose_showing={this.state.lose_showing}
          close={this.close} />
      </div>

    );
  }

  close = () => {
    console.log('close');
    this.setState({ lose_showing: false });
    this.setState({ win_showing: false })
  }
}


export default App;
