import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import bottomTabs from './bottomTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import authStack from './authStack';

function Navigator() {
  const BottomTabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/*TODO: change to `isLoggedIn` after login implementation  */}
      {true ? (
        <Stack.Navigator>
          {authStack.map(({name, component}) => (
            <Stack.Screen name={name} component={component} />
          ))}
        </Stack.Navigator>
      ) : (
        <BottomTabs.Navigator>
          {bottomTabs.map(({name, component}) => (
            <BottomTabs.Screen name={name} component={component} />
          ))}
        </BottomTabs.Navigator>
      )}
    </>
  );
}

export default Navigator;
