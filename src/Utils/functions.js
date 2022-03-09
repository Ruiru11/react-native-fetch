export const disableTopBar = componentName => {
  return (componentName.options = {
    topBar: {
      visible: false,
    },
  });
};
