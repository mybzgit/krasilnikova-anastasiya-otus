export default class MyTree extends HTMLElement {
  connectedCallback() {
    const templateContent = `
        <style>
            .node-text {
                padding: 0.2rem 0;
            }
            .node-text:hover {
                background-color: rgba(192, 192, 192, .25);
            }					
            details {
                margin-left: ${this.getAttribute("level") * 0.5}rem;
            }
        </style>
        <details open>
            <summary class="node-text">
                ${this.getAttribute("text")}
            </summary>
            <slot name="children"></slot>
        </details>`;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = templateContent;
  }
}
