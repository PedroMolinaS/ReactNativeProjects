import React from 'react';
import { Provider } from 'react-redux'
import MiApp from './src';
import { store } from './src/store';


export default function App() {
  return (
    <Provider store={store}>
      <MiApp />
    </Provider>
  );
}


