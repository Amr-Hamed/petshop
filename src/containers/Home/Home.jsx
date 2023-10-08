import React from 'react';
import {Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers/auth';

function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Text>Home</Text>
      <Button title="logout" onPress={() => dispatch(login())} />
    </>
  );
}

export default Home;
