import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {configureStore} from './redux';
import AppNavigator from './Navigators/AppNavigator'

export default index = () => {
  const {store, persistor} = configureStore();

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>

  );
};
