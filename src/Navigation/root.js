/*
Here we create  Root component wrapped by NativeBaseProvider 
This allows for setting of application theme globbally if that was a requirement
The NativeBaseProvider accepts initialWindowMetrics:{}, colorModeManager:() => and theme:{} 
A global componnet also helps us define things like network connection status and snackbar
We also handle global network changes here
*/

import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

LogBox.ignoreLogs(['NativeBase:']);

const RootComponent = ({PassedComponent, componentProps}) => {
  const [networkAvilable, setNetworkAvailability] = useState(false);

  useEffect(() => {
    netInfoEventListner();
    return () => {
      netInfoEventListner();
    };
  }, []);

  const netInfoEventListner = NetInfo.addEventListener(state => {
    // helps track network connection status
    if (state.isConnected != networkAvilable)
      setNetworkAvailability(state.isConnected);
    if (!state.isConnected)
      Snackbar.show({
        text: 'Please check your internet connection, we are having a problem',
        duration: Snackbar.LENGTH_INDEFINITE,
      });
  });

  return (
    <NativeBaseProvider>
      <PassedComponent {...componentProps} />
    </NativeBaseProvider>
  );
};
export default RootComponent;
