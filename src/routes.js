import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import FileList from './containers/fileList'
import FileNew from './containers/fileNew'

export default (
<Route path="/" component={App}>
    <IndexRoute component={FileList}/>
    <Route path="/newfile" component={FileNew}/>
</Route>

);