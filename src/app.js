import './scss/main.scss';
import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './features/home';

let people = require('./people.js');
let $ = require('jquery');

console.log('working',angular);
angular.module('app', [uirouter, home])
    .config(routing);
console.log('routing',routing);
/*$.each(people,function (key,value) {
    $('body').append('<h1>' + value.name + '</h1>');
});*/
