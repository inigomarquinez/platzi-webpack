import '../css/index.css';
import './text';
import text from './text';

text();

if (module.hot) {
  module.hot.accept('./text.js', function() {
    console.log('HOT RELOAD!');
    text();
  });
}