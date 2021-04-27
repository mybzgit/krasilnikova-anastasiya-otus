import { test, expect } from '@jest/globals';

import MyLeaf from './my-leaf.js';
import MyTree from './my-tree.js';
import { createTreeElement } from './create-tree.js';

test("createTreeElement should return 'my-tree' for item with children", () => {
    const item = { id: 1, items: [{ id: 2 }] };
    const result = createTreeElement(item, 1);
    expect(result.getAttribute("text")).toBe("1");
    expect(result.children.length).toBe(1);
    expect(result).toBeInstanceOf(MyTree);
});
test("createTreeElement should return 'my-leaf' for item without children", () => {
    const item = { id: 1 };
    const result = createTreeElement(item, 1);
    expect(result.getAttribute("text")).toBe("1");
    expect(result.children.length).toBe(0);
    expect(result).toBeInstanceOf(MyLeaf);
});