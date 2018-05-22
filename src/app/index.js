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
      <p>{this.props.mssg}</p>
      <hr/>
      <p><strong>My Cat: </strong>{this.props.pepper.name}</p>
      <p><strong>My Cat's Breed: </strong>{this.props.pepper.breed}</p>
      <p><strong>My Cat's Attributes: </strong>{this.props.pepper.attributes}</p>
      </div>
    );
  }
});

var myCat = {name: 'Pepper', breed: 'Bengal', attributes: 'kooky & playful'};

// Put component into html page
ReactDOM.render(<TodoComponent mssg="I like cats a lot" pepper={myCat} />, document.getElementById('todo-wrapper'))