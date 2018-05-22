var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// Create Component
var TodoComponent = createReactClass({
  render: function() {
    return (
      <div>
      <h1>Hello!</h1>
      <p>This is a test</p>
      </div>
    );
  }
});

// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))