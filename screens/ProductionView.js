import React from 'react';
import { WebView } from 'react-native-webview';

const ProductionView = () => {
  return (
      <WebView source={{ uri: 'https://expo.dev' }} style={{ flex: 1 }} />
  );
};

export default ProductionView;