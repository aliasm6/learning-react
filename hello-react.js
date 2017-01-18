const hello = React.createElement('p', null, 'Hello, World!');

const notes = [
  { id: 1, content: 'Learn React' },
  { id: 2, content: 'Get Lunch' },
  { id: 3, content: 'Learn React Native' }
]

const notesListItems = notes.map(message => React.createElement('li', { key: message.id }, message.content))

const notesList = React.createElement('section', {},
  React.createElement('h1', {}, 'You have ', notes.length, ' reminders'),
  React.createElement('ul', {}, notesListItems)
)

ReactDOM.render(notesList, document.getElementById('entry-point'))
