import axios from 'axios';
import ServerActions from './actions/ServerActions';

let API = {
  fetchLinks() {
    axios.get('/data/links')
      .then((res) => {
        ServerActions.receiveLinks(res);
      })
      .catch((err) => {

      });
  }
}

export default API;