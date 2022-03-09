import React, {useEffect} from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
  Center,
  View,
} from 'native-base';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EventRegister} from 'react-native-event-listeners';
import {Navigation} from 'react-native-navigation';

import {loginAction} from '../../Redux/Actions/login';
import {disableTopBar} from '../../Utils/functions';

const Login = props => {
  const dispatch = useDispatch();
  const {userLoginLoad, loginResponse} = useSelector(state => state.login);

  const userLogin = () => {
    const data = {
      grant_type: 'password',
      client_id: 'salutmobile',
      username: 'Craigneill+tst3@gmail.com',
      password: 'Test123!!',
      client_secret: 'Qj2CcT86pgnaU2jS',
    };
    dispatch(loginAction(data));
  };

  useEffect(() => {
    EventRegister.addEventListener('loginSuccess', () => {
      Navigation.push(props.componentId, {
        component: {
          name: 'Home',
        },
      });
    });
    return () => {
      // cleanup
      EventRegister.removeAllListeners();
    };
  });

  console.log('loginResponse', userLoginLoad, loginResponse);
  return (
    <View
      style={{
        backgroundColor: 'grey',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        placeContent: 'center',
      }}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Image
            style={{
              resizeMode: 'contain',
              height: '20%',
              width: '20%',
              marginLeft: '40%',
            }}
            source={require('../../Assets/salutImage.jpeg')}
          />

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button
              mt="4"
              colorScheme="teal"
              onPress={() => userLogin()}
              isLoading={userLoginLoad}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                I'm a new user.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

disableTopBar(Login);

export default Login;
