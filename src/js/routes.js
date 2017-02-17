import React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

import App from './components/App';
import Carousel from './containers/Carousel/Carousel';
//import Test from './Test/Test.js'
import NotFoundView from './views/NotFoundView';

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="Carousel" />
		<Route path="Carousel" component={Carousel} />
		<Route path="404" component={NotFoundView} />
		<Redirect from="*" to="404" />
	</Route>
);

