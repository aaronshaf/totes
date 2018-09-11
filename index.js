// Copyright (c) 2018 Aaron Shafovaloff
// https://github.com/aaronshaf/totes/blob/master/LICENSE

export default render => 
  class extends HTMLElement {
    constructor() {
      super();
      this.props = Array.from(this.attributes).reduce((props, attr) => {
        props[attr.name] = attr.value;
        return props;
      }, {});
      const _this = this;
      Object.defineProperty(this.props, "children", {
        get() {
          return Array.from(_this.childNodes);
        }
      });
      (this.constructor.observedProperties || []).forEach(name => {
        Object.defineProperty(this, name, {
          get() {
            return this.props[name];
          },
          set(newValue) {
            this.attributeChangedCallback(name, null, newValue);
          }
        });
      });
      this._needsRender = false;
      this.setState = this.setState.bind(this);
      this.ensureShadow();
    }

    attributeChangedCallback(name, _oldValue, newValue) {
      const nextProps = Object.assign({}, this.props, {
        [name]: newValue
      });
      this.maybeUpdate(nextProps, this.state, null);
    }

    async maybeUpdate(nextProps, nextState, callback) {
      const prevProps = this.props;
      const prevState = this.state;

      const didPropsChange = shallowDiffers(prevProps, nextProps);
      const didStateChange = shallowDiffers(prevState, nextState);

      const shouldUpdate = this.shouldComponentUpdate
        ? this.shouldComponentUpdate(nextProps, nextState)
        : didPropsChange || didStateChange;

      if (didPropsChange) {
        this.props = nextProps;
      }

      if (didStateChange) {
        this.state = nextState;
      }

      if (shouldUpdate === false) {
        if (typeof callback === "function") {
          callback(this.state);
        }
        return;
      }

      if (this.getDerivedStateFromProps) {
        const stateChange = this.getDerivedStateFromProps(
          this.props,
          this.state
        );
        if (stateChange !== null) {
          this.setState(stateChange, callback);
          return;
        }
      }

      this.ensureRender(prevProps, prevState, callback);
    }

    setState(delta, callback) {
      const nextState = Object.assign({}, this.state, delta);
      this.maybeUpdate(this.props, nextState, callback);
    }

    async connectedCallback() {
      this.ensureShadow();
      await true;
      this._render();
      if (this.componentDidMount) {
        setTimeout(() => this.componentDidMount(), 0);
      }
    }

    disconnectedCallback() {
      if (this.componentWillUnmount) {
        console.warn("use componentDidUnmount instead");
      }

      if (this.componentDidUnmount) {
        this.componentDidUnmount();
      }
    }

    ensureShadow() {
      if (this.shadow === true && this.shadowRoot == null) {
        this.attachShadow({ mode: "open" });
      }
    }

    _render() {
      this.ensureShadow();
      const destination = this.shadowRoot || this;
      if (this.render) {
        const result = this.render(this.props, this.state);
        if (result) {
          render(result, destination);
        } else {
          while (destination.firstChild) {
            destination.removeChild(destination.firstChild);
          }
        }
      }
    }

    async ensureRender(prevProps, prevState, callback) {
      if (this._needsRender === false) {
        this._needsRender = true;
        this._needsRender = await false;
        const snapshot =
          this.componentDidUpdate && this.getSnapshotBeforeUpdate
            ? this.getSnapshotBeforeUpdate(prevProps, prevState)
            : null;

        this._render();
        if (this.componentDidUpdate) {
          this.componentDidUpdate(prevProps, prevState, snapshot);
        }
      }
      if (typeof callback === "function") {
        callback(this.state);
      }
    }
  };

// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (let i in a) if (!(i in b)) return true;
  for (let i in b) if (a[i] !== b[i]) return true;
  return false;
}
