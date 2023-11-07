import {View, Image, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({setIsSplashDone}) => {
  useEffect(() => {
    setTimeout(() => {
      //TODO: load necessary config then `setIsSplashDone`
      setIsSplashDone(true);
      // TODO: match with splash animation time when added
    }, 3000);
  }, [setIsSplashDone]);
  return (
    <View
      // TODO: move styles to style file
      style={{
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        // TODO: move styles to style file
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#6c3653',
        }}>
        Pet Shop
      </Text>
      <Image
        source={require('../../assets/images/logo.png')}
        // TODO: move styles to style file
        style={{
          height: 150,
          width: 150,
        }}
      />
    </View>
  );
};

export default Splash;
