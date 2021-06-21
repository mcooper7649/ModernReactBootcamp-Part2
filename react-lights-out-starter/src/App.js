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
          <meta name="title" property="og:title" content="LightsOut" data-react-helmet="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1" data-react-helmet="true" />
          <meta name="theme-color" content="#000000" data-react-helmet="true" />
          <meta name="image" property="og:image" content="https://image.prntscr.com/image/yiujgjgzSHqyxvP8UAlb1w.png" data-react-helmet="true" />
          <meta name="url" property="og:url" content="https://zen-bhaskara-0d6cd4.netlify.app/" data-react-helmet="true" />
          <meta name="description" property="og:description" content="LightsOut | Can YOU turn the lights out?" data-react-helmet="true" />
          <meta name="author" property="og:author" content="Michael Cooper" data-react-helmet="true" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-18T00:00:00-0600" data-react-helmet="true" />
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
