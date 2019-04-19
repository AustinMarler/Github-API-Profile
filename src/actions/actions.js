import store from '../store';
import axios from 'axios';

export function getData() {
  axios.get("https://api.github.com/users/AustinMarler").then(resp => {
    store.dispatch({
      type: "GET_USER_DATA",
      userData: resp.data
    })
  })
  axios.get("https://api.github.com/users/AustinMarler/repos").then(resp => {
    store.dispatch({
      type: "GET_USER_REPOS_DATA",
      reposData: resp.data
    })
  })
}