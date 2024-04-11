// const baseUrl = 'http://localhost:3001';

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }

// export { getItems };

export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
 
  getItems() {
    return fetch(`${this.baseUrl}/items`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  addNewItem({ name, link, weather }) {
    return fetch(`${this.baseUrl}/items`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
        weather,
      }),
    }).then(this._checkResponse);
  }

  deleteItem(id) {
    return fetch(`${this.baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkResponse);
  }
}