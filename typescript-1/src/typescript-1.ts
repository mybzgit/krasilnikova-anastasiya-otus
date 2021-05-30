class ElementParser {
  private _element: HTMLElement;

  getID(): string {
    return this._element.id !== "" ? `#${this._element.id}` : "";
  }
  getNodeName(): string {
    return this._element.nodeName.toLowerCase();
  }
  getClasses(): string {
    if (this._element.classList.length === 0) return "";
    else {
      let classes: string[] = [].slice.call(this._element.classList);
      return "." + classes.join(".");;
    }
  }
  public getCurrentElementName(e: HTMLElement): string {
    this._element = e;
    return this.getNodeName() + this.getID() + this.getClasses();
  }
}

function getNthChild(e: HTMLElement): string {
  let parent: HTMLElement = e.parentElement;

  if (parent.children.length === 1 || e.nodeName === "BODY") return "";
  else if (parent.firstElementChild === e) return ":first-child";
  else if (parent.lastElementChild === e) return ":last-child";
  else {
    const children: HTMLElement[] = [].slice.call(parent.children);
    const childrenOfType: HTMLElement[] = children.filter((child) => {
      let parser = new ElementParser();
      return parser.getCurrentElementName(child) === parser.getCurrentElementName(e);
    });
    const index: number = childrenOfType.findIndex((child) => child === e);
    if (index > -1) return `:nth-of-type(${index + 1})`;
    else return "";
  }
}

function getPath(e: HTMLElement): string {
  function getLocalPath(e: HTMLElement): string {
    if (e === undefined) return;
    let parser = new ElementParser();
    path = (parser.getCurrentElementName(e) + getNthChild(e) + " " + path).trim();
    if (e.parentNode !== null && e.parentNode.nodeName != "HTML")
      return getLocalPath(e.parentElement);
  }

  let path: string = "";
  getLocalPath(e);
  return path;
}
