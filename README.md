# Let's Learn React!

### Viget shared this tutorial:

https://share.viget.com/sxsw/learning-react/lessons/0-intro/index.html

I will be following and recording my progress.

### Key Terms:

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
1. JSX - extension to javaScript that allows for simple html-like syntax
  Example:
  ```javaScript
  //Instead of
  React.createElement('p', {}, 'Hello World!')
  //We can just say
  <p>Wow, that was easy!</p>
  ```
1. Synthetic Event System - React's wrapper of the browser's native event system. When event handler's are set up in React they bubble up to the browser's `window` where they are intercepted by react and communicated to it's elements
1. State - Internal to each component. Used to keep track of component's local data
