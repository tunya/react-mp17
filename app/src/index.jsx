import React from 'react';
import ReactDOM from 'react-dom';

const accomplished = [
    'Set up the dev environment for React Mentoring Program',
    'Implemented simple React + Webpack app',
    'Added dependencies needed for furhter work'
];

var element1 = <main>
    <h1>Homework 1</h1>
    <ul>
        {accomplished.map((elem) => <li>{elem}</li>)}
    </ul>
</main>;

ReactDOM.render(element1, document.getElementById('container'));

