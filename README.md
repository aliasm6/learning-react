# Let's Learn React!

### Viget shared this tutorial:

https://share.viget.com/sxsw/learning-react/lessons/0-intro/index.html

#### I will be following and recording my progress.

#### Key Terms:

1. Element - React's most primitive data type. "Chunks of data that describe how to build a UI. Think of them as low level instructions; the assembly of React."
Example:
```javascript
const elementExample = React.createElement("type",[props],[...children]);
```

1. React - The standard library

1. ReactDOM - The rendering engine

1. Components - Chunks of React elements that represent a common behavior
Example:
```javascript
class ComponentExample extends React.Component {
  render() {
    return React.createElement("h1", {}, this.props.exampleContent)
  }
}
```
1. props - Props create a way to send instructions to components
1. One-way data flow - Information in React flows downward so when a React component receives props (instructions), it knows to re-render
1. 
