import { PUBLIC_APIS } from "~/utils/config";
import { removeToken } from "~/utils/auth";

export default function ({ store, $axios, redirect }) {
  $axios.onRequest(config => {
    //console.log('Making request to ', config.url)
    // //console.log(store.state.auth.token.tokenType);
    // //console.log(store.state.auth.token.accessToken);
    if (!PUBLIC_APIS.includes(config.url) && !config.url.includes('/app/') && store.state.auth && store.state.auth.token) {
      config.headers.Authorization = store.state.auth.token.tokenType + ' ' + store.state.auth.token.accessToken;
      return config;
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // redirect('/400')
    }
  })

  $axios.onRequestError(error => {
    // //console.log('onRequestError', error)
  })

  $axios.onResponseError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      // removeToken();
      redirect('/login');
    }
  })

  $axios.onError(error => {
    //console.log('onError', error)
  })

  $axios.onResponse(response => {
    // //console.log('onResponse', response)
  })
}