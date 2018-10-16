import { html, Component } from "../index.js";

export default class BasicExample extends Component {
  static get observedAttributes() {
    return ["message"];
  }

  static get observedProperties() {
    return ["showExclamation"];
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
          autofocus
          @input=${this.handleInput}
          placeholder="Your name"
        />
      </div>

      <p>${this.props.message} ${this.state.name}${
      this.props.showExclamation ? "?" : "!"
    }</p>
      
      <button @click=${this.handleClick}>
        ${this.state.toggled ? "On" : "Off"}
      </button>
    </div>`;
  }
}
