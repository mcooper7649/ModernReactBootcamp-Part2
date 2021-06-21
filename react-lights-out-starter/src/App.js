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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="https://image.prntscr.com/image/yiujgjgzSHqyxvP8UAlb1w.png" />
          <meta name="url" property="og:url" content="https://zen-bhaskara-0d6cd4.netlify.app/" />
          <meta name="description" property="og:description" content="LightsOut | Can YOU turn the lights out?" />
          <meta name="author" content="Michael Cooper" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-18T00:00:00-0600"></meta>
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
