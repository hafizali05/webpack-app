import './scss/main.scss';
import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './features/home';
import test from './features/test';
angular.module('app', [uirouter, home,test])
    .config(routing);
console.log('working');
/*$.each(people,function (key,value) {
    $('body').append('<h1>' + value.name + '</h1>');
});*/
