import React from 'react';

class Topnav extends React.Component {
  render() {
    return (
      <header className="primary">
        <a href="#" className="back-arrow nav-icon"><i className="icon-arrow-left"></i></a>
        <div className="header-title">
          <span className="section-name">Feature Type</span>
          <span className="section">Engines</span>
        </div>
        <div className="header-actions">
          <ul className="actions nav-icon">
            <li><a href="#"><i className="icon-clock"></i></a></li>
            <li><a href="#"><i className="icon-dots"></i></a></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Topnav;