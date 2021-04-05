const React = require('react');

class SummaryComponent extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSummary = this.toggleSummary.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  toggleSummary() {
    const summaryIcon = document.getElementById("summary-icon");
    const summary = document.getElementById("summary-fixed");
    summaryIcon.classList.toggle("is-active");
    summary.classList.toggle("open");
  }

  scrollTo(props) {
    document.getElementsByClassName(`scroll-${props}`)[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    console.log(document.getElementsByClassName(`scroll-${props}`)[0]);
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
          <li onClick={() => this.scrollTo(1)}>Introduction</li>
          <li onClick={() => this.scrollTo(2)}>200BC - 500AD (Christianity)</li>
          <li onClick={() => this.scrollTo(3)}>500 - 1300 (Islam)</li>
          <li onClick={() => this.scrollTo(4)}>1500 - 1850 (Persia) </li>
          <li onClick={() => this.scrollTo(5)}>1900s (South Yemen)</li>
          <li onClick={() => this.scrollTo(6)}>1900s (North Yemen)</li>
          <li onClick={() => this.scrollTo(7)}>1950s (Soviet Collapse)</li>
          <li onClick={() => this.scrollTo(8)}>2000s (Civil War)</li>
          <li onClick={() => this.scrollTo(9)}>2010 (Iran)</li>
          <li onClick={() => this.scrollTo(10)}>2015 (War on food)</li>
          <li onClick={() => this.scrollTo(11)}>References</li>
        </ul>
      </div>
    </div>  
    );
  }
}

module.exports = SummaryComponent;
