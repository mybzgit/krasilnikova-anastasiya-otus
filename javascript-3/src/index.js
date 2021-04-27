import { createTreeElement } from './create-tree.js';

const data = {
    id: "1",
    items: [
        { id: "1_1", items: [{ "id": "1_1_1" }] },
        {
            id: "1_2", items: [
                {
                    id: "1_2_1",
                    items: [{ id: "1_2_1_1" }, { id: "1_2_1_2" }]
                },
                { id: "1_2_2" },
                { id: "1_2_3", items: [{ id: "1_2_3_1" }] }]
        },
        { id: "1_3" }]
};

window.onload = () => {
    let contaier = document.querySelector("#treeContainer");
    contaier.appendChild(createTreeElement(data));
}
