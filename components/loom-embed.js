const React = require('react');

class LoomEmbed extends React.Component {
    render() {
        return (
            <div className="loom-embed">
                <iframe src="https://www.loom.com/embed/0e0688bc92914766a638e21fc863e84d">
                </iframe>
            </div>
        );
    }
}

module.exports = LoomEmbed;