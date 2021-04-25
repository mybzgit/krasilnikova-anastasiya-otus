"use strict";

const getCurrentElementName = ({ nodeName, id, className }) => {
    let nodeID = (id !== "") ? ('#' + id) : "";
    let classes = (className !== "") ? ('.' + className.replace(" ", ".")) : "";
    return nodeName.toLowerCase() + nodeID + classes;
};
const getNthChild = (e) => {
    const parent = e.parentNode;

    if (parent.children.length == 1 || e.nodeName == "BODY")
        return "";
    else if (parent.firstElementChild === e)
        return ":first-child";
    else if (parent.lastElementChild === e)
        return ":last-child";

    else {
        const children = [...parent.children];
        let childrenOfType = children.filter(child => getCurrentElementName(child) === getCurrentElementName(e));
        let index = childrenOfType.findIndex(child => child === e);
        if (index > -1)
            return `:nth-of-type(${index + 1})`;
        else
            return "";
    }
};

const getPath = (e) => {
    const getLocalPath = (e) => {
        if (e === undefined)
            return;
        path = (getCurrentElementName(e) + getNthChild(e) + " " + path).trim();
        if (e.parentNode !== null && e.parentNode.nodeName != "HTML")
            return getLocalPath(e.parentNode);
    }

    let path = "";
    getLocalPath(e);
    return path;
}

module.exports = { getCurrentElementName, getNthChild, getPath };