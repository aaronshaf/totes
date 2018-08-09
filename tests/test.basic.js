import BasicExample from "../examples/basic.js";

customElements.define("basic-example", BasicExample);

describe("BasicExample", () => {
  const node = document.createElement("basic-example");
  node.setAttribute("message", "Hello,");

  before(() => {
    workspace.appendChild(node);
  });

  it("renders message", async () => {
    expect(node.querySelector("p").textContent).to.equal("Hello, Aaron");
  });

  it("changes attribute", async () => {
    const input = node.querySelector("input");
    input.value = "Stacie";
    input.dispatchEvent(new Event("input"));
    await true;
    expect(node.querySelector("p").textContent).to.equal("Hello, Stacie");
  });

  after(() => {
    node.remove();
  });
});
