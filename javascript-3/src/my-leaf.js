export default class MyLeaf extends HTMLElement {
  connectedCallback() {
    const templateContent = `
        <style>
            .leaf {
                margin-left: ${this.getAttribute("level") * 0.5}rem;	
            }
            .leaf-text {
                padding: 0.2rem 0 0.2rem 1.3rem;
            }
        </style>
        <div class="leaf">
            <div class="leaf-text">${this.getAttribute("text")}</div>
        </div>`;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = templateContent;
  }
}
