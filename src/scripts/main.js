'use strict';
window.jQuery = window.$ = require('jquery');
const bootstrapjs = require('bootstrap-sass');

$('.button').on('click', () => {
    alert('Hello world.');
    console.log(111);
});

if (process.env.NODE_ENV === 'development') {
    console.log('dev');
} else if (process.env.NODE_ENV === 'production') {
    console.log('prod');
}
