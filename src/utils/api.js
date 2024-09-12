const baseUrl = 'http://localhost:3001';

export const handleServerResponse = (res) => {
    return res.ok ? res.json(): Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
    return fetch(`${baseUrl}${url}`, options).then(handleServerResponse);
};

export const getItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "applications/json",
    },
  }).then(handleServerResponse);
};

export const addNewItem = ({ name, imageUrl, weather }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "applications/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const deleteItem = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(handleServerResponse);
};

// function getItems() {
//   return fetch(`${baseUrl}/items`).then((res) => {
//     return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
//   });
// }

// export { getItems };

// export default class Api {
//   constructor({ baseUrl, headers }) {
//     this.baseUrl = baseUrl;
//     this.headers = headers;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error: ${res.status}`);
//   }

//   getItems() {
//     return fetch(`${this.baseUrl}/items`, {
//       method: "GET",
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }

//   addNewItem({ name, imageUrl, weather }) {
//     return fetch(`${this.baseUrl}/items`, {
//       method: "POST",
//       headers: this.headers,
//       body: JSON.stringify({
//         name,
//         imageUrl,
//         weather,
//       }),
//     }).then(this._checkResponse);
//   }

//   deleteItem(id) {
//     return fetch(`${this.baseUrl}/items/${id}`, {
//       method: "DELETE",
//       headers: this.headers,
//     }).then(this._checkResponse);
//   }
// }