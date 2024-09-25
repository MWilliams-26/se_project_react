export const baseUrl = 'http://localhost:3001';

export const getUserInfo = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
export const handleServerResponse = (res) => {
    return res.ok ? res.json(): Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
    return fetch(url, options).then(handleServerResponse);
};

export const getItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "applications/json",
    },
  }).then(handleServerResponse);
};

export const addNewItem = (name, imageUrl, weather, token) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const deleteItem = (id, token) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    }
  }).then(handleServerResponse);
};


export const updateCurrentUser = (name, avatar, token) => {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(handleServerResponse);
};

export const addLike = (id, token) => {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const removeLike = (id, token) => {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
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