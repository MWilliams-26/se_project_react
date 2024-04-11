// const baseUrl = 'http://localhost:3001';

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }

// export { getItems };

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }