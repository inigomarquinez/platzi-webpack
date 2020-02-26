import React from 'react';

import logo from '../../images/platzi.png';
import video from '../../videos/que-es-core.mp4';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

const App = () => (
  <>
    <div>Hello world from React!</div>
    <p className="less">
      This is a paragraph styled with less
    </p>
    <p className="sass">
      This is a paragraph styled with sass
    </p>
    <p className="stylus">
      This is a paragraph styled with stylus
    </p>
    <img src={logo} alt="Platzi logo" width={40} />
    <br />
    <video controls src={video} width={360} poster={logo} />
  </>
);

export default App;
