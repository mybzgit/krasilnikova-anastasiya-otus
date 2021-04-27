export default class MyLeaf extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .leaf {
                margin-left: ${this.getAttribute('level') * 0.5}em;	
            }
            .leaf-text {
                padding: 0.2em 0 0.2em 1.3em;
            }
        </style>
        <div class="leaf">
            <div class="leaf-text">${this.getAttribute('text')}</div>
        </div>`;
    }
}