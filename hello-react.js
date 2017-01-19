const notes = [
  { id: 1, content: 'Learn React' },
  { id: 2, content: 'Get Lunch' },
  { id: 3, content: 'Learn React Native' }
]

class App extends React.Component {
  render() {
    let notes = this.props.notes

    return React.createElement('section', {},
      React.createElement('h1', {}, 'You have ', notes.length, ' notes'),
      React.createElement(NotesList, {notes: notes})
    )
  }
}

class Note extends React.Component {
  render() {
    return React.createElement('li', {}, this.props.content)
  }
}

class NotesList extends React.Component {
  renderNote(note) {
    return React.createElement(Note, {
      key: note.id,
      content: note.content
    })
  }
  render() {
    return React.createElement('ul', {}, this.props.notes.map(this.renderNote))
  }
}

ReactDOM.render(React.createElement(App, { notes: notes }), document.getElementById('entry-point'))
