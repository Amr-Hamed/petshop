import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Navigator from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Splash} from './src/containers';

function App() {
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      {!isSplashDone ? (
        <Splash setIsSplashDone={setIsSplashDone} />
      ) : (
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      )}
    </Provider>
  );
}

export default App;
