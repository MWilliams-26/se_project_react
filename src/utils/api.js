export const baseUrl = 'http://localhost:3001';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const fetch = (url, options) => {
    return fetch(url, options).then(checkResponse);
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`).then(checkResponse);
};

export const addNewItem = (name, imageUrl, weather, token) => {
  return fetch(`${baseUrl}/items`, {
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
  }).then(checkResponse);
};

export const deleteItem = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    }
  }).then(checkResponse);
};

export const addLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const removeLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "applications/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
