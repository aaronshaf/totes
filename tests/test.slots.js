import SlotsExample from "../examples/slots.js";

customElements.define("basic-example", BasicExample);

describe("BasicExample", () => {
  let node;

  beforeEach(() => {
    node && node.remove();
    node = document.createElement("basic-example");
    node.setAttribute("message", "Hello,");
    workspace.appendChild(node);
  });

  it("renders message", async () => {
    expect(node.querySelector("p").textContent).to.equal("Hello, Aaron");
  });

  afterEach(() => {
    node.remove();
  });
});
