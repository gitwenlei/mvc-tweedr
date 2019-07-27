var React = require('react');

class Login extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to Tweedr!</h1>
            <h3>Please login</h3>
            <form action="/check" method="POST">
                <p>
                    name
                    <input name="name"/>
                </p>
                <p>
                    password
                    <input name="password"/>
                </p>
                <input type="submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;