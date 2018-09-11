import { html, render } from "./vendor/lit-html/lib/lit-extended.js";
import totes from "../index.js";

const Component = totes(render);

export default class SlotsExample extends Component {
  static get observedAttributes() {
    return ["message"];
  }

  constructor() {
    super();
    this.shadow = true;
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
      <h1>Slots example</h1>
      <slot>This should be replaced</slot>
    </div>`;
  }
}
