const notes = [
  { id: 1, content: 'Learn React' },
  { id: 2, content: 'Get Lunch' },
  { id: 3, content: 'Learn React Native' }
]

class App extends React.Component {
  render() {
    let notes = this.props.notes

    return (
      <section>
        <h1>You have { notes.length }</h1>
        <NotesList notes={ notes } />
      </section>
    )
  }
}

class Note extends React.Component {
  render() {
    return <li>{ this.props.content }</li>
  }
}

class NotesList extends React.Component {
  renderNote(note) {
    return <Note key={ note.id } content={ note.content } />
  }
  render() {
    return <ul>{ this.props.notes.map(this.renderNote) }</ul>
  }
}

ReactDOM.render(<App notes={ notes } />, document.getElementById('entry-point'))
