import React from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import Featureform from './Featureform';

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Sidenav />
          <div className="app-right">
            <Topnav />
            <Featureform />
          </div>
        </div>
    );
  }
}

export default App;