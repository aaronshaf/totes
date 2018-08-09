# totes

React-like web components. Works well with [lit-html](https://github.com/Polymer/lit-html).

## Installation

```
yarn add lit-html@0.10.2 @aaronshaf/totes --prod
```

## Quick start

```html
<script type="module">
  import {
    html,
    render
  } from "https://unpkg.com/lit-html@0.10.2/lib/lit-extended.js";
  import totes from "https://unpkg.com/@aaronshaf/totes@0.0.9/index.js";

  const Component = totes(render)(HTMLElement);

  class HelloWorld extends Component {
    render() {
      return html`<div>
        <div>Hello, ${this.props.name}</div>
      </div>`;
    }
  }

  customElements.define("hello-world", HelloWorld);
</script>

<hello-world name="Aaron"></hello-world>
```

## But can it do... ?

Yes, it can.

```javascript
export default class BasicExample extends Component {
  static get observedAttributes() {
    return ["message"];
  }

  constructor() {
    super();
    this.state = { name: "Aaron", toggled: false };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({ name: event.target.value || "Aaron" });
  }

  handleClick() {
    this.setState({ toggled: this.state.toggled === false });
  }

  render() {
    return html`<div>
      <div>
        <input
          type="text"
          value="Aaron"
          on-input=${this.handleInput}
        />
      </div>

      <p>${this.props.message} ${this.state.name}</p>

      <button on-click=${this.handleClick}>
        ${this.state.toggled ? "On" : "Off"}
      </button>
    </div>`;
  }
}

customElements.define("basic-example", BasicExample);
```

```html
<basic-example message="Hello"></basic-example>
```

## Experiment on Glitch

[totes-example](https://glitch.com/edit/#!/totes-example?path=hello-world.html:1:0)

## Supported browsers

- [x] Chrome (without polyfill)
- [x] Firefox
- [x] Safari
- [x] Edge

### Custom elements / Shadow DOM polyfill

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.4/webcomponents-loader.js"></script>
```

## Supported

- [x] setState
- [x] render
- [x] componentDidMount
- [x] shouldComponentUpdate
- [x] getSnapshotBeforeUpdate
- [x] component[Did]Unmount
- [x] componentDidUpdate
- [x] getDerivedStateFromProps
- [x] this.props.children
