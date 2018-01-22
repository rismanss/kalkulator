import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  render(
    <div>
      <App />
    </div>,
    document.getElementById('root')
  );
};

registerServiceWorker();
renderApp();
