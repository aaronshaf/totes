import BasicExample from "../examples/basic.js";

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
    expect(node.querySelector("p").textContent).to.equal("Hello, Aaron!");
  });

  it("changes input", async () => {
    const input = node.querySelector("input");
    input.value = "Stacie";
    input.dispatchEvent(new Event("input"));
    await true;
    expect(node.querySelector("p").textContent).to.equal("Hello, Stacie!");
  });

  it("changes attribute", async () => {
    node.setAttribute("message", "Hi,");
    await true;
    expect(node.querySelector("p").textContent).to.equal("Hi, Aaron!");
  });

  it("changes property", async () => {
    expect(node.querySelector("p").textContent).to.equal("Hello, Aaron!");
    node.showExclamation = true
    await true;
    expect(node.querySelector("p").textContent).to.equal("Hello, Aaron?");
  });

  afterEach(() => {
    node.remove();
  });
});
