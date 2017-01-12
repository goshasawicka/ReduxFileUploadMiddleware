import { browserHistory } from 'react-router'

export default store => next => action => {

    if ( ! action.redirect_now ) return next(action);

    browserHistory.push(action.redirect_now);
}
