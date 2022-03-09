import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

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
  FlatList,
  Spacer,
  Avatar,
  View,
  Spinner,
} from 'native-base';
import {disableTopBar} from '../../Utils/functions';
import {loadDataAction} from '../../Redux/Actions/fetchData';

const Home = () => {
  const dispatch = useDispatch();
  const {loginResponse} = useSelector(state => state.login);
  const {fetchDataLoad, fetchDataResponse} = useSelector(
    state => state.fetchData,
  );
  console.log('loginResponse at home ', loginResponse);
  console.log('fetchDataResponse at home ', fetchDataLoad, fetchDataResponse);

  useEffect(() => {
    if (Array.isArray(fetchDataResponse) && fetchDataResponse.length === 0) {
      dispatch(loadDataAction(loginResponse.token));
    }
  });

  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: '100%',
      }}>
      {fetchDataLoad ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        </View>
      ) : (
        <Box>
          <Heading fontSize="xl" p="4" pb="3">
            Data
          </Heading>
          <FlatList
            data={fetchDataResponse}
            renderItem={({item}) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2">
                <HStack space={5} justifyContent="space-between">
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.value}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.key}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.updatedByID}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.key}
                    </Text>
                  </VStack>
                  <Spacer />

                  <Spacer />
                </HStack>
              </Box>
            )}
            keyExtractor={item => item.configurationID}
          />
        </Box>
      )}
    </View>
  );
};

disableTopBar(Home);

export default Home;
