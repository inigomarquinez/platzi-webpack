import React from 'react';

import logo from '../../images/platzi.png';
import video from '../../videos/que-es-core.mp4';

const App = () => (
  <>
    <div>Hello world from React!</div>
    <img src={logo} alt="Platzi logo" width={40} />
    <br />
    <video controls src={video} width={360} poster={logo} />
  </>
);

export default App;
