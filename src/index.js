import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
  title: 'Yiggity Yo',
  content: 'Body, body, body',
  author: 'Yah-man',
  comments: ['eh', 'huh', 'thatz righ', 'are these interjections?']
}, {
  title: 'Yiggity Yolka;sdjf',
  content: 'Body, body, body - what?',
  author: 'Yah-man NONo',
  comments: ['eh2', 'huh2']
}];

ReactDOM.render(<Post posts={posts} />, document.getElementById('root'));
// ReactDOM.render(<Post />, document.getElementById('root'));
registerServiceWorker();
