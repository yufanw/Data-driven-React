import axios from 'axios';
import ServerActions from './actions/ServerActions';

let API = {
  fetchLinks() {
    axios.post('/graphql', {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`
    })
    .then((res) => {
      ServerActions.receiveLinks(res.data.data.links);
    })
    .catch((err) => {
      throw err;
    });
  }
}

export default API;