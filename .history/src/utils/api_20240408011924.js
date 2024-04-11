// const baseUrl = 'http://localhost:3001';

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }

// export { getItems };
class Api {
  constructor({ baseUrl = "http://localhost:3001", headers }) {
    this._baseUrl = baseUrl;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getItems() {
    return fetch(`${this._baseUrl}/items`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkResponse);
  }

 

}

export default Api;