export class TagElement {
  constructor(element) {
    this.element = element;
  }

  get text() {
    return this.element.textContent;
  }
}
