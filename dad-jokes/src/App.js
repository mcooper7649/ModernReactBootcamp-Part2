import JokeList from './JokeList';
import './App.css';
import { Helmet } from 'react-helmet';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className='App'>
      <Helmet>
          <meta charset="utf-8" data-react-helmet="true" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="title" content="React App | Dad Jokes" property="og:title"  data-react-helmet="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color"  data-react-helmet="true" />
          <meta name="image" property="og:image" content="https://i.ibb.co/gTkzyFH/linkedin-shared-link-1.png"  data-react-helmet="true" />
          <meta name="url" property="og:url" content="https://www.mycodedojo.com" />
          <meta name="description" property="og:description"  content="Dad Jokes | Looking for a knee slapper? Look no more, come check out Dad Jokes, the latest React Application for Cringy Dads" data-react-helmet="true" />
          <meta name="author" property="og:author" content="Michael Cooper" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-30T00:00:00-0600" />
          <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script>
          <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
          <title>React App | Dad Jokes</title>
      </Helmet>
      <JokeList />
    </div>
    );
  }
}

export default App;
