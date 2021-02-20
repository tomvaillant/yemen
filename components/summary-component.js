const React = require('react');

class SummaryComponent extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSummary = this.toggleSummary.bind(this);
  }

  toggleSummary() {
    const summaryIcon = document.getElementById("summary-icon");
    const summary = document.getElementById("summary-fixed");
    summaryIcon.classList.toggle("is-active");
    summary.classList.toggle("open");
  }
  render() {
    return (
    <div className="summary-container">
      <div className="summary-icon-container">
        <div className="hamburger" id="summary-icon" onClick={this.toggleSummary.bind()}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div id="summary-fixed">
        <span>Table of Contents</span>
        <ul>
          <li>Introduction</li>
          <li>200BC - 500AD</li>
          <li>500AD - 1300AD</li>
          <li>1500AD - 1850AD</li>
          <li>South Yemen</li>
          <li>North Yemen</li>
          <li>Nasser</li>
          <li>Soviet Collapse</li>
          <li>2010 - 2020</li>
          <li>Iran allegations</li>
          <li>War on food</li>
          <li>Civilian stories</li>
          <li>Moving forward</li>
        </ul>
      </div>
    </div>  
    );
  }
}

module.exports = SummaryComponent;
