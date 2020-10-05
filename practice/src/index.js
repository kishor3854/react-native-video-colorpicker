import React from 'react';
import Dashboard from './Dashboard'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {configureStore} from './redux';
import Colorpicker from './colorpicker'

export default index = () => {
  const {store, persistor} = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  );
};
