import SlotsExample from "../examples/slots.js";

customElements.define("slots-example", SlotsExample);

describe("SlotsExample", () => {
  let node;

  beforeEach(() => {
    node && node.remove();
    node = document.createElement("slots-example");
    node.innerHTML = `<span>It works!</span>`;
    // node.setAttribute("message", "Hello,");
    workspace.appendChild(node);
  });

  it("renders message", async () => {
    expect(node.querySelector("span").textContent).to.equal("It works!");
  });

  afterEach(() => {
    node.remove();
  });
});
