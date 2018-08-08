import { html } from "./vendor/lit-html/lib/lit-extended.js";
import { Component } from "./index.js";

export default class Example extends Component(HTMLElement) {
  static get observedAttributes() {
    return ["name"];
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
          autofocus
          on-input=${this.handleInput}
          placeholder="Your name"
        />
      </div>

      <p>${this.props.message} ${this.state.name}</p>
      
      <button on-click=${this.handleClick}>
        ${this.state.toggled ? "On" : "Off"}
      </button>
    </div>`;
  }
}
