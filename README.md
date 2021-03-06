# totes

React-like web components. Powered by [lit-html](https://github.com/Polymer/lit-html).

Supports:

- [x] setState
- [x] render
- [x] componentDidMount
- [x] shouldComponentUpdate
- [x] getSnapshotBeforeUpdate
- [x] component[Did]Unmount
- [x] componentDidUpdate
- [x] getDerivedStateFromProps
- [x] this.props.children

## Quick start (copy and paste)

```html
<script type="module">
  import { html, Component } from "https://unpkg.com/@aaronshaf/totes@1/index.js";

  class HelloWorld extends Component {
    render() {
      return html`<div>Hello, ${this.props.name}</div>`;
    }
  }

  customElements.define("hello-world", HelloWorld);
</script>

<hello-world name="Aaron"></hello-world>
```

That's it. No build steps.️ 🎵

## Example: setState and event handlers

```javascript
export default class BasicExample extends Component {
  static get observedAttributes() {
    return ["message"];
  }

  constructor() {
    super();
    this.state = {
      name: "Aaron",
      toggled: false
    };
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
          @input=${this.handleInput}
        />
      </div>

      <p>${this.props.message} ${this.state.name}</p>

      <button @click=${this.handleClick}>
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

## Install from npm

```
yarn add @aaronshaf/totes --prod
```

## Try it on Glitch

[totes-example](https://glitch.com/edit/#!/totes-example?path=hello-world.html:1:0)

## Supported browsers

- [x] Chrome (without polyfill)
- [x] Firefox
- [x] Safari
- [x] Edge

### Custom elements / Shadow DOM polyfill

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>
```

## Dev

`git clone https://github.com/aaronshaf/totes.git`

`yarn global add serve`

`serve`

## See also

- [html-router](https://github.com/aaronshaf/html-router) - drop-in router
- [dem](https://github.com/aaronshaf/dem) - download ECMAScript modules
