var React = require("react");

class Home extends React.Component {
  render() {
    // console.log(this.props.types);
    const tweetList = this.props.allTweets.map(tweedr =>
        <ul key={tweedr.id}>
            <li key={tweedr.id}> user: {tweedr.user_name} </li>
            <li key={tweedr.id}> tweeted: {tweedr.tweet} </li>
        </ul>
        );
    return (
      <html>
        <body>
          <h3>Welcome to Tweedr!</h3>
          {tweetList}
        </body>
      </html>
    );
  }
}

module.exports = Home;