class NotesForm extends React.Component {
  render() {
    return (
      <form ref="form" onSubmit={ this.handleSubmission }>
        <input type="text" ref="content" />
        <input type="submit" value="Add Note" />
      </form>
    )
  }

  handleSubmission(event) {
    event.preventDefault()
    this.props.onSubmit(this.refs.content)
    this.refs.form.reset()
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

class App extends React.Component {
  getInitialState() {
    notes: [
      { id: 1, content: 'Learn React' },
      { id: 2, content: 'Get Lunch' },
      { id: 3, content: 'Learn React Native' }
    ]
  }
  render() {
    return (
      <section>
        <h1>You have { notes.length } notes</h1>
        <NotesList notes={ notes } />
        <NotesForm onSubmit={ this.formWasSubmitted } />
      </section>
    )
  }

  formWasSubmitted (content) {
    var note = {
      id: Date.now().toString(), // cheap trick for unique ids, don't do this in production!
      content: content
    }

    this.setState({
      notes: this.state.notes.concat(note)
    })
  }
}

ReactDOM.render(<App notes={ notes } />, document.getElementById('entry-point'))
