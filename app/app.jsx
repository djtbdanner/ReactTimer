var React = require ('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
// above is object descructuring - kind of like the line below simplified
// var Route = require('react-route').Route;
var Main = require('Main');

// load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// application styles
require('style!css!sass!applicationStyles')



ReactDOM.render(
   <Router history={hashHistory}>
     <Route path='/' component={Main}>
     </Route>
   </Router>,
   document.getElementById('app')
 );
