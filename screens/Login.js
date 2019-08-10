import React from 'react';
import styled from 'styled-components';
import {SocialIcon} from 'react-native-elements';

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

const Login = ({navigator}) => (
  <Container>
    <SocialIcon
      title="Sign In With Facebook"
      button
      type="facebook"
      style={LoginStyles}
      onPress={() => navigator.push('Dashboard', {name: 'John'})}
    />
    <SocialIcon
      title="Login with Twitter"
      button
      type="twitter"
      style={LoginStyles}
    />
    <SocialIcon
      title="Login with Instagram"
      button
      type="instagram"
      style={LoginStyles}
    />
  </Container>
);
export default Login;
