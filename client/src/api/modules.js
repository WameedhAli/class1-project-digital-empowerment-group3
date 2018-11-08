const API_URL = 'http://localhost:4000'

const head = {
  'Content-Type': 'application/json'
};

export const getModules = () => {
  return fetch(`${API_URL}/module`).then(response => response.json());
};

export const createModules = (title) => {
  return fetch(`${API_URL}/module`, {
    method: 'POST',
    headers: head, // this is where we set the headers
    body: JSON.stringify({ title: title })
  }).then(response => response.json());
};