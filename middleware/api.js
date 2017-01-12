import axios from 'axios';

export default function ({dispatch}) {
  return next => action => {

    if(action.url && action.method){

      function update (response) {
        const newAction = {...action, payload: response.data, url: null, method: null, redirect_now: action.redirect};
        dispatch(newAction);
      };

      function error (e) {
        console.log("api error:", e);
      }

      switch (action.method){
        case 'GET':
          axios.get(action.url).then(update).catch(error);
          break;
        case 'DELETE':
          axios.delete(action.url).then(update).catch(error);
          break;
        case 'POST':
          axios.post(action.url, action.payload).then(update).catch(error);
          break;
      };

    } else {
      return next(action);
    }
  }
}
