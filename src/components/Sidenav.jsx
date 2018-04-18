import React from 'react';

class Sidenav extends React.Component {
  render() {
    return (
      <div id="main-nav">
        <div className="main-nav-wrapper">
          <nav id="main">
            <img className="home-logo" src="assets/go.png" alt="Gocious" />
            <ul>
              <li>
                <a href="#">
                  <i className="icon-search"></i>
                  Search
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-feature-family"></i>
                  Feature Sets
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-programs"></i>
                  Programs
                </a>
              </li>
            </ul>
          </nav>
          <nav id="user">
            <img className="user" src="assets/user.jpg" alt="That's You" />
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidenav;