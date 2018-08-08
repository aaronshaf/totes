import { render } from "./vendor/lit-html/lib/lit-extended.js";

export const Component = elementClass =>
  class extends elementClass {
    constructor() {
      super();
      this.updateProps();
      this._needsRender = false;
      this.setState = this.setState.bind(this);
    }

    attributeChangedCallback() {
      // _name, _oldValue, _newValue
      this.updateProps();
      this.invalidate();
    }

    updateProps() {
      const props = {};
      for (let attr of this.attributes) {
        props[attr.name] = attr.value;
      }
      this.props = props;
    }

    setState(delta) {
      // const oldState = this.state;
      const newState = Object.assign({}, this.state, delta);
      this.state = newState;
      this.invalidate();
    }

    componentDidMount() {}

    connectedCallback() {
      this.componentDidMount();
      this.invalidate();
    }

    async invalidate() {
      if (!this._needsRender) {
        this._needsRender = true;
        this._needsRender = await false;
        this.renderCallback();
      }
    }

    renderCallback() {
      render(this.render(this), this);
    }
  };
