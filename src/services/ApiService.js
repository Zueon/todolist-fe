// import { API_BASE_URL } from '../app-config';
const { API_BASE_URL } = require('../app-config');
const axios = require('axios');
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const USERNAME = 'USERNAME';

export async function call(api, method, request) {
  try {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    const options = {
      method: method,
      url: API_BASE_URL + api,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };

    if (request) {
      options.data = request;
    }

    if (accessToken && accessToken !== null) {
      options.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    console.log('options.url' + options.url);
    console.log('APIBASE' + API_BASE_URL);
    console.log('API' + api);

    const response = await axios(options);
    return response;
  } catch (error) {
    if (error.response.status === 403) {
      window.location = '/login';
    }
  }
}

export async function signup(userDTO) {
  const response = await call('/auth/signup', 'POST', userDTO);
  console.log(response);
  if (response.status === 200) {
    window.location = '/login';
  }
}

export async function signin(userDTO) {
  const response = await call('/auth/signin', 'POST', userDTO);
  const accessToken = response.data.token;
  if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem('USERNAME', response.data.username);
    window.location = '/';
  }
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  localStorage.setItem(USERNAME, null);
  window.location = '/login';
}
