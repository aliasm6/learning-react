const notes = [
  { id: 1, content: 'Learn React' },
  { id: 2, content: 'Get Lunch' },
  { id: 3, content: 'Learn React Native' }
]

class NotesForm extends React.Component {

  handleSubmission(event) {
    event.preventDefault()
    this.props.onSubmit(this.refs.content)
    this.refs.form.reset()
  }
  
  render() {
    return (
      <form ref="form" onSubmit={ this.handleSubmission }>
        <input type="text" ref="content" />
        <input type="submit" value="Add Note" />
      </form>
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

class App extends React.Component {
  render() {
    let notes = this.props.notes

    return (
      <section>
        <h1>You have { notes.length } notes</h1>
        <NotesList notes={ notes } />
        <NotesForm onSubmit={ this.formWasSubmitted } />
      </section>
    )
  }

  formWasSubmitted(content) {
    alert('New note: ' + content)
  }
}


ReactDOM.render(<App notes={ notes } />, document.getElementById('entry-point'))
