class ElementParser {
    getID() {
        return this._element.id !== "" ? `#${this._element.id}` : "";
    }
    getNodeName() {
        return this._element.nodeName.toLowerCase();
    }
    getClasses() {
        if (this._element.classList.length === 0)
            return "";
        else {
            let classes = [].slice.call(this._element.classList);
            return "." + classes.join(".");
            ;
        }
    }
    getCurrentElementName(e) {
        this._element = e;
        return this.getNodeName() + this.getID() + this.getClasses();
    }
}
function getNthChild(e) {
    let parent = e.parentElement;
    if (parent.children.length === 1 || e.nodeName === "BODY")
        return "";
    else if (parent.firstElementChild === e)
        return ":first-child";
    else if (parent.lastElementChild === e)
        return ":last-child";
    else {
        const children = [].slice.call(parent.children);
        const childrenOfType = children.filter((child) => {
            let parser = new ElementParser();
            return parser.getCurrentElementName(child) === parser.getCurrentElementName(e);
        });
        const index = childrenOfType.findIndex((child) => child === e);
        if (index > -1)
            return `:nth-of-type(${index + 1})`;
        else
            return "";
    }
}
function getPath(e) {
    function getLocalPath(e) {
        if (e === undefined)
            return;
        let parser = new ElementParser();
        path = (parser.getCurrentElementName(e) + getNthChild(e) + " " + path).trim();
        if (e.parentNode !== null && e.parentNode.nodeName != "HTML")
            return getLocalPath(e.parentElement);
    }
    let path = "";
    getLocalPath(e);
    return path;
}
