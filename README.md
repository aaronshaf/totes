# totes

React-like Components using custom elements and lit-html.

This is currently a working proof of concept.

## Example

### hello-world.js

```javascript
import { Component } from "@aaronshaf/totes";

export default class HelloWorld extends Component(HTMLElement) {
  constructor() {
    super();
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return html`<div>
      <div>Hello, ${this.props.name}</div>
      <button on-click=${this.handleClick}>Click me</button>
      <div>${this.state.clicked ? "Clicked" : "Not clicked"}</div>
    </div>`;
  }
}
```

### index.html

```html
<script type="module">
  import HelloWorld from "./hello-world.js";
  customElements.define("hello-world", HelloWorld);
</script>

<hello-world name="Aaron"></hello-world>
```

## Roadmap

- [x] setState
- [ ] getDerivedStateFromProps
- [x] render
- [x] componentDidMount
- [x] shouldComponentUpdate
- [x] getSnapshotBeforeUpdate
- [x] component[Did]Unmount
- [ ] this.props.children (use MutationObserver)
- [ ] componentDidUpdate
