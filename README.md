# totes

React-like components using custom elements. Works well with [lit-html](https://github.com/Polymer/lit-html).

## Installation

```
yarn add lit-html@0.10.2 @aaronshaf/totes --prod
```

## Example

### hello-world.js

```javascript
import { html, render } from "./node_modules/lit-html/lib/lit-extended.js";
import totes from "./node_modules/@aaronshaf/totes/index.js";

const Component = totes(render)(HTMLElement);

export default class HelloWorld extends Component {
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

## Supported browsers

- [x] Firefox
- [x] Chrome
- [x] Safari
- [ ] Edge (not tested yet)

## Supported methods

- [x] setState
- [x] render
- [x] componentDidMount
- [x] shouldComponentUpdate
- [x] getSnapshotBeforeUpdate
- [x] component[Did]Unmount
- [x] componentDidUpdate
- [x] getDerivedStateFromProps

## Roadmap

- [ ] this.props.children (use MutationObserver)
