import MyLeaf from './my-leaf.js';
import MyTree from './my-tree.js';

customElements.define('my-tree', MyTree);
customElements.define('my-leaf', MyLeaf);

const createSlotChildren = (subtree) => {
    const slot = document.createElement('DIV');
    slot.setAttribute("slot", "children");
    subtree.appendChild(slot);
    return slot;
}

const createTreeElement = (node, level = 1) => {
    if (node.items !== undefined) {
        const subtree = document.createElement("my-tree");
        subtree.setAttribute("text", node.id);
        subtree.setAttribute("level", level++);
        const childrenContainer = createSlotChildren(subtree);
        for (const item of node.items) {
            const child = createTreeElement(item, level);
            childrenContainer.appendChild(child);
        }
        return subtree;
    }
    else {
        const leaf = document.createElement("my-leaf");
        leaf.setAttribute("text", node.id);
        leaf.setAttribute("level", level);
        return leaf;
    }
}

export { createTreeElement };