var hello = React.createElement('p', null, 'Hello, World!');

var notesList =
  React.createElement('section', {},
    React.createElement('h1', {}, 'You have 3 notes'),
    React.createElement('ul', {},
      React.createElement('li', {}, 'Learn React'),
      React.createElement('li', {}, 'Get Lunch'),
      React.createElement('li', {}, 'Learn React Native')
    )
)

ReactDOM.render(notesList, document.getElementById('entry-point'))
