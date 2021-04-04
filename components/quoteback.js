const { text } = require('d3');
const React = require('react');

class Quoteback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: props.quoteInfo[0].author,
            text: props.quoteInfo[0].quote,
            url: props.quoteInfo[0].url,
            twitter: props.quoteInfo[0].twitter,
            title: props.quoteInfo[0].title
        }
    }

    render() {
        return (
            <div className="quoteback-sizer">
                <blockquote className="quoteback" darkmode="" data-title={this.state.title} data-author={this.state.twitter} cite={this.state.url}>
                {this.state.text}
                <footer>{this.state.twitter}<cite> <a href={this.state.url}>{this.state.url}</a></cite></footer>
                </blockquote><script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>      
            </div>
        );
    }
}

module.exports = Quoteback;