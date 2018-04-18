import React from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Sidenav />
          <div className="app-right">
            <Topnav />
          </div>
        </div>
    );
  }
}

export default App;