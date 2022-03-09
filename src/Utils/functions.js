import Snackbar from 'react-native-snackbar';

export const snackbar = message => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: 'red',
  });
};

export const disableTopBar = componentName => {
  return (componentName.options = {
    topBar: {
      visible: false,
    },
  });
};
