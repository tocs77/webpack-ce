import $ from 'jquery';
import Post from './Post.js';
import './styles/styles.css';
import json from './assets/json.json';
import logo from './assets/phone.jpg';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const post = new Post('Super post');
console.log('Post to string ', post.toString());
console.log('json', json);
console.log('xml', xml);
console.log('csv', csv);

//

$('pre').html(post.toString());

//
(function addImage() {
  var img = new Image();
  img.src = logo;
  document.getElementById('image').appendChild(img);
})();
