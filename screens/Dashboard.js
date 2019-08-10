import React from 'react';
import styled from 'styled-components';
import {SocialIcon} from 'react-native-elements';
import {Text, View} from 'react-native';

const LoginStyles = {
  width: 260
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Dashboard = ({navigator, name}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Text>Second screen</Text>
      <Text>Hello {name}!</Text>
      <Text onPress={() => navigator.pop()}>Go back</Text>
    </View>
  );
};

export default Dashboard;
