import Post from './Post.js';
import './styles/styles.css';
import json from './assets/json.json';
import logo from './assets/phone.jpg';

const post = new Post('Super post');
console.log('Post to string ', post.toString());
console.log('json', json);

(function GFG_Fun() {
  var img = new Image();
  img.src = logo;
  document.getElementById('image').appendChild(img);
  down.innerHTML = 'Image Element Added.';
})();
