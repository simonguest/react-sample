var React = require('react');
var PersonPanelContainer = require('./PersonPanelContainer.jsx');

var App = React.renderComponent(
      <html>
        <head lang="en">
          <meta charSet="UTF-8"/>
          <title>React App 2</title>
          <script type="text/javascript" src="/scripts/bundle.js"></script>
        </head>
        <body>
          <div id="main">
            <PersonPanelContainer />
          </div>
        </body>
      </html>,
      document.getElementById('react-app')
);