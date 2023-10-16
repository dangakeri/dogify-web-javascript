class DogsView {
  _data;
  _parentElement = document.querySelector(".image-dog");

  _titleElement = document.querySelector(".title");
  _message = "Loading";

  render(data) {
    this._data = data;

    console.log(this._data);
    const markup = this.generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup() {
    return `
    <h1>${this._data.name}</h1>
    <img class="image" src="${this._data.dog}" alt="dogs" />
    `;
  }

  renderSpinner() {
    const markup = `
            <div class="spinner">
            <p>${this._message}</p>
            </div>    
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRefresh(handler) {
    this._titleElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");

      handler(location.reload(true));
    });
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
export default new DogsView();
