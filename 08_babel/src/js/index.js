import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('Who is that pokemon?');
search(id)
  .then(data => {
    render(data);
  })
  .catch(error => {
    console.log('There was no pokemon!', error.message);
  });
