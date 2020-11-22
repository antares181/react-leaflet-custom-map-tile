import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const apiTask = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/todos?userId=1',
});