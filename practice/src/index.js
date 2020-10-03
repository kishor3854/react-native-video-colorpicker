import React from 'react';
import Video from './Video';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {configureStore} from './redux';
import ColorPicker from './colorpicker';

export default index = () => {
  const {store, persistor} = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ColorPicker />
      </PersistGate>
    </Provider>
  );
};
