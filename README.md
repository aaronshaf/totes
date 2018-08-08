# totes

React-like Components using lit-html.

This is currently a working proof of concept.

## Roadmap

- [x] setState
- [ ] getDerivedStateFromProps
- [x] render
- [x] componentDidMount
- [ ] shouldComponentUpdate
- [ ] getSnapshotBeforeUpdate
- [ ] componentWillUnmount
- [ ] this.props.children

## Example

### example.js

```javascript
import { Component } from "@aaronshaf/totes";

export default class Example extends Component(HTMLElement) {
  static get observedAttributes() {
    return ["name"];
  }

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
  import Example from "./example.js";
  customElements.define("totes-example", Example);
</script>

<hello-world name="Aaron"></hello-world>
```
