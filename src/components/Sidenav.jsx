import React from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div id="main-nav">
        <nav id="main">
          <div className="home-logo">
            <a href="#" onClick={() => this.setState({ open: !this.state.open })}>
              <i className="icon-go"></i>
            </a>
          </div>
          <Collapse in={this.state.open}>
            <ul className="main-bot">
              <li>
                <a href="#" className="nav-icon">
                  <i className="icon-search"></i>
                  <p>Search</p>
                </a>
              </li>
              <li>
                <a href="#" className="nav-icon">
                  <i className="icon-feature-family"></i>
                  <p>Features</p>
                </a>
              </li>
              <li>
                <a href="#" className="nav-icon">
                  <i className="icon-programs"></i>
                  <p>Programs</p>
                </a>
              </li>
            </ul>
          </Collapse>
        </nav>
      </div>
    );
  }
}

export default Sidenav;