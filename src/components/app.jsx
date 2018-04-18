import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Sidenav from './Sidenav';


class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Sidenav />
        </div>
    );
  }
}

export default App;