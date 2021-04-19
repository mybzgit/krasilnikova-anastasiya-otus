"use strict";

const getCurrentElementName = ({ nodeName, id, classList }) => {
    let nodeID = (id !== "") ? ('#' + id) : "";
    let classes = "";
    if (classList.length !== 0)
        classes = '.' + [...classList].join('.');

    return nodeName.toLowerCase() + nodeID + classes;
};
const getNthChild = (e) => {
    const parent = e.parentNode;

    if (parent.children.length == 1)
        return "";
    if (parent.firstElementChild === e)
        return ":first-child";
    if (parent.lastElementChild === e)
        return ":last-child";

    if (getCurrentElementName(e.nextElementSibling) === getCurrentElementName(e) || getCurrentElementName(e.previousElementSibling) === getCurrentElementName(e)) {
        const children = [...parent.children];
        let index = children.findIndex(child => child === e);
        if (index > -1)
            return `:nth-child(${index + 1})`;
        else
            return "";
    }
};

const getPath = (e) => {
    const getLocalPath = (e) => {
        if (e === undefined)
            return;
        path = (getCurrentElementName(e) + getNthChild(e) + " " + path).trim();
        if (e.parentNode !== null && e.parentNode.nodeName != "BODY")
            return getLocalPath(e.parentNode);
    }

    let path = "";
    getLocalPath(e);
    return path;
}

module.exports = { getCurrentElementName, getNthChild, getPath };