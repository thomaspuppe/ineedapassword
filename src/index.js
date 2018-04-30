import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello!!! My Minimal React Webpack Babel Setup';

ReactDOM.render(
  `<h1>${title}</h1>`,
  document.getElementById('app')
);

module.hot.accept();