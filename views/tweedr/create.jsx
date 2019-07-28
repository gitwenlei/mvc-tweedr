var React = require('react');

class Create extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to Tweedr!</h1>
            <form action="/tweet" method="POST">
                <p>Enter your tweet here:</p>
                <input name="tweet" />
                <input type="submit" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Create;