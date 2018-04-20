import React from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import FeatureForm from './FeatureForm';

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Sidenav />
          <div className="app-right">
            <Topnav />
            <FeatureForm />
          </div>
        </div>
    );
  }
}

export default App;