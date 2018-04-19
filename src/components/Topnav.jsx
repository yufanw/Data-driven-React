import React from 'react';

class Topnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Feature",
      section: "Create A Feature",
      icon: "icon-arrow-left"
    };
  } 
  render() {
    return (
      <header className="primary">
        <a href="#"><i className={this.state.icon}></i></a>
        <div className="header-title">
          <span className="section-name">{this.state.name}</span>
          <span className="section">{this.state.section}</span>
        </div>
        <div className="header-actions">
          <ul className="actions">
            <li><a href="#"><i className="icon-clock"></i></a></li>
            <li><a href="#"><i className="icon-dots"></i></a></li>
          </ul>
        </div>

      </header>
    )
  }
}

export default Topnav;
