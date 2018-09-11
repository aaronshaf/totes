import { html, render } from "https://unpkg.com/lit-html@0.11/lit-html.js";
import totes from "../index.js";

const Component = totes(render);

export default class BasicExample extends Component {
  static get observedAttributes() {
    return ["message"];
  }

  static get observedProperties() {
    return ["showExclamation"];
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
          @input=${this.handleInput}
          placeholder="Your name"
        />
      </div>

      <p>${this.props.message} ${this.state.name}${this.props.showExclamation ? '?' : '!'}</p>
      
      <button @click=${this.handleClick}>
        ${this.state.toggled ? "On" : "Off"}
      </button>
    </div>`;
  }
}
