import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from "@react-native-community/netinfo";

const WebViewScreen = ({ route }) => {
  const { url } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("URL chargée :", url);
    console.log("Connecté à Internet :", isConnected);
  }, [url, isConnected]);

  const handleLoadStart = () => setIsLoading(true);
  const handleLoadEnd = () => setIsLoading(false);

  const handleError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error('WebView error details:', JSON.stringify(nativeEvent, null, 2));
    setError(nativeEvent);
    setIsLoading(false);
  };

  if (!isConnected) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Pas de connexion Internet</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erreur de chargement : {error.description}</Text>
        <Text style={styles.errorDetails}>Code : {error.code}</Text>
        <Text style={styles.errorDetails}>URL : {error.url}</Text>
        <Text style={styles.errorDetails}>Détails : {JSON.stringify(error, null, 2)}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: url }}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
        mixedContentMode="compatibility"
        onHttpError={(event) => {
          console.error('HTTP Error:', event.nativeEvent);
        }}
        renderError={(errorDomain, errorCode, errorDesc) => (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Erreur de chargement</Text>
            <Text style={styles.errorDetails}>Domaine : {errorDomain}</Text>
            <Text style={styles.errorDetails}>Code : {errorCode}</Text>
            <Text style={styles.errorDetails}>Description : {errorDesc}</Text>
          </View>
        )}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorDetails: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
});

export default WebViewScreen;