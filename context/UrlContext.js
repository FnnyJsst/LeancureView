import React from 'react';
import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const loadUrls = async () => {
      try {
        const storedUrls = await AsyncStorage.getItem('urls');
        if (storedUrls) {
          setUrls(JSON.parse(storedUrls));
        }
      } catch (error) {
        console.error('Failed to load URLs', error);
      }
    };

    loadUrls();
  }, []);

  useEffect(() => {
    const saveUrls = async () => {
      try {
        await AsyncStorage.setItem('urls', JSON.stringify(urls));
      } catch (error) {
        console.error('Failed to save URLs', error);
      }
    };

    saveUrls();
  }, [urls]);

  const addUrl = (url) => {
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }
    setUrls((prevUrls) => [...prevUrls, formattedUrl]);
  };

  return (
    <UrlContext.Provider value={{ urls, setUrls, addUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrls = () => React.useContext(UrlContext);