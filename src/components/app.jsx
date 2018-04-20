import React from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import FeatureForm from './FeatureForm';
import Main from './Main'

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Sidenav />
          <div className="app-right">
            <Topnav />
            <Main limit={4}/>
          </div>
        </div>
    );
  }
}

export default App;