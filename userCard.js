class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `Max Mustermann`;
  }
}

window.customElements.define("user-card", UserCard);
