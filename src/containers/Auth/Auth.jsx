import React from 'react';
import {Button, Text} from 'react-native';
import Locale from '../../localization';
import {LANGUAGES} from '../../utils/globalVariables';

function Auth() {
  return (
    <>
      <Button
        title="change lang"
        onPress={() => {
          Locale.setLanguage('AR');
        }}
      />
      <Text>{Locale.t('account')}</Text>
    </>
  );
}

export default Auth;
