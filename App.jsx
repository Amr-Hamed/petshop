import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
