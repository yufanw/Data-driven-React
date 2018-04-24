import React from 'react';
import Relay from 'react-relay/classic';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import FeatureForm from './FeatureForm';
import Main from './Main'

class HomeRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    store: (Component) => Relay.QL `
      query MainQuery {
        store { ${Component.getFragment('store')} }
      }
    `
  }
}

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Sidenav />
          <div className="app-right">
            <Topnav />
            <Relay.RootContainer
              Component={Main}
              route={new HomeRoute()}
            />
          </div>
        </div>
    );
  }
}

export default App;