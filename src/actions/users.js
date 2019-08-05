
export const getUsers = () => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'http://dev.frevend.com/json/users.json';
  fetch(proxyurl + url)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      return dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: res.users })
    })
    .catch(error => {
      console.log(error);
    })
}

