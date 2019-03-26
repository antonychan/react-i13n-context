import React, { Component } from 'react';
import { setupI13n, createI13nNode } from 'react-i13n';

import AwesomeComponent from './AwesomeComponent';
import AwesomeComponentWithRenderProps from './AwesomeComponentWithRenderProps';
import AwesomeComponentWithUseContext from './AwesomeComponentWithUseContext';
import logo from './logo.svg';
import './App.css';

const I13nAnchor = createI13nNode('a', {
    isLeafNode: true,
    bindClickEvent: true,
    follow: true
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Using contextType and contextTypes:
          <AwesomeComponent />
          Using useContext and HoC:
          <AwesomeComponentWithUseContext />
          Using renderProps:
          <AwesomeComponentWithRenderProps />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <I13nAnchor href="https://www.yahoo.com" i13nModel={{action: 'click', label: 'foo'}}>Learn React</I13nAnchor>
        </header>
      </div>
    );
  }
}

const I13nApp = setupI13n(App, {
    rootModelData: {site: 'foo'},
    isViewportEnabled: true
});

export default I13nApp;
