const baseUrl = 'http://localhost:3001';

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }

// export { getItems };


_checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

const getItems() {
  return fetch(`${this._baseUrl}/items`, {
    method: "GET",
    headers: this.headers,
  }).then(this._checkValidResponse);
}
