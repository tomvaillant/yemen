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
          <li onClick={() => this.scrollTo(2)}>200BC - 500AD</li>
          <li onClick={() => this.scrollTo(3)}>500AD - 1300AD</li>
          <li onClick={() => this.scrollTo(4)}>1500AD - 1850AD</li>
          <li onClick={() => this.scrollTo(5)}>South Yemen</li>
          <li onClick={() => this.scrollTo(6)}>North Yemen</li>
          <li onClick={() => this.scrollTo(7)}>Nasser</li>
          <li onClick={() => this.scrollTo(8)}>Soviet Collapse</li>
          <li onClick={() => this.scrollTo(9)}>2010 - 2020</li>
          <li onClick={() => this.scrollTo(10)}>Iran allegations</li>
          <li onClick={() => this.scrollTo(11)}>War on food</li>
          <li onClick={() => this.scrollTo(12)}>Moving forward</li>
        </ul>
      </div>
    </div>  
    );
  }
}

module.exports = SummaryComponent;
