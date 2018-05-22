var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// Create Component
var TodoComponent = createReactClass({
  getInitialState: function() {
    return {
      todos: ['brush teeth', 'exercise for 20 min', 'play the cat', 'eat breakfast']
    }
  },
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      )
    });
    return (
      <div>
        <h1>Hello!</h1>
        <p>This is a test</p>
        <p>{this.props.mssg}</p>
        <hr/>
        <p><strong>My Cat: </strong>{this.props.pepper.name}</p>
        <p><strong>My Cat's Breed: </strong>{this.props.pepper.breed}</p>
        <p><strong>My Cat's Attributes: </strong>{this.props.pepper.attributes}</p>

      <div id="todo-list">
        <ul>{todos}</ul>
      </div>
      
      </div>
    );
  }
});

var myCat = {name: 'Pepper', breed: 'Bengal', attributes: 'kooky & playful'};

// Put component into html page
ReactDOM.render(<TodoComponent mssg="I like cats a lot" pepper={myCat} />, document.getElementById('todo-wrapper'))