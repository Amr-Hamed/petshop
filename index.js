if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import initApp from './initApp';

initApp();

AppRegistry.registerComponent(appName, () => App);
