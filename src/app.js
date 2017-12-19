import './scss/main.scss';
let people = require('./people.js');
let $ = require('jquery');

console.log('working');

$.each(people,function (key,value) {
    $('body').append('<h1>' + value.name + '</h1>');
});
