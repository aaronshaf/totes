import { html, Component } from "../index.js";

export default class SlotsExample extends Component {
  static get observedAttributes() {
    return ["message"];
  }

  constructor() {
    super();
    this.shadow = true;
    this.state = { name: "Aaron", toggled: false };
  }

  handleInput(event) {
    this.setState({ name: event.target.value || "Aaron" });
  }

  handleClick() {
    this.setState({ toggled: this.state.toggled === false });
  }

  render() {
    return html`<div>
      <h1>Slots example</h1>
      <slot>This should be replaced</slot>
    </div>`;
  }
}
