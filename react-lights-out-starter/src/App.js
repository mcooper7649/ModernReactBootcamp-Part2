import React, { Component } from "react";
import Helmet from 'react-helmet';
import Board from "./Board";
import "./App.css";



/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Helmet>
          <meta charset="utf-8" />
          <meta name="title" property="og:title" content="LightsOut" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="https://i.ibb.co/hCNfQ4x/thumbnail.png" />
          <meta name="url" property="og:url" content="https://i.ibb.co/hCNfQ4x/thumbnail.png" />
          <meta name="description" property="og:description" content="LightsOut | A Game that tests your ability to Turn off the lights. Are you Ready?" />
          <meta name="author" property="og:author" content="Michael Cooper" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-21T00:00:00-0600" />
          <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script>
          <title>LightsOut</title>
      </Helmet>
        {/* <audio src="./game-bg-new.mp3" loop autoPlay /> */}
        <div className="game-wrapper">
        <Board />
        </div>
      </div>
    );
  }
}

export default App;
