import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urls, setUrls] = useState([]);
  const [titles, setTitles] = useState([]);

  // This function is used to load the URLs from the AsyncStorage
  useEffect(() => {
    const loadUrls = async () => {
      try {
        const storedUrls = await AsyncStorage.getItem('urls');
        if (storedUrls) {
          const parsedUrls = JSON.parse(storedUrls);
          setUrls(parsedUrls);
          loadInitialTitles(parsedUrls);
        }
      } catch (error) {
        console.error('Failed to load URLs', error);
      }
    };

    loadUrls();
  }, []);

  // This function is used to save the URLs to the AsyncStorage
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

  // const loadInitialTitles = async (loadedUrls) => {
  //   const newTitles = await Promise.all(
  //     loadedUrls.map(async (url) => {
  //       try {
  //         const response = await fetch(url);
  //         const html = await response.text();
  //         const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  //         return titleMatch ? titleMatch[1] : '';
  //       } catch (error) {
  //         console.error('Failed to load title for', url, error);
  //         return '';
  //       }
  //     })
  //   );
  //   setTitles((prevTitles) => [...prevTitles.slice(0, -1), ...newTitles]);
  // };

  // This function is used to load the titles of the URLs
  const loadInitialTitles = async (loadedUrls) => {
    const newTitles = await Promise.all(
      loadedUrls.map(async (url) => {
        try {
          const response = await fetch(url);
          const html = await response.text();
          const titleMatch = html.match(/<title>(.*?)<\/title>/i);
          return titleMatch ? titleMatch[1] : '';
        } catch (error) {
          console.error('Failed to load title for', url, error);
          return '';
        }
      })
    );
    setTitles((prevTitles) => [...prevTitles.slice(0, -loadedUrls.length), ...newTitles]);
  };

// const addUrl = (url) => {
//   let formattedUrl = url.trim();
//   if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
//     formattedUrl = `https://${formattedUrl}`;
//   }

//   if (!urls.includes(formattedUrl)) {
//     setUrls((prevUrls) => [...prevUrls, formattedUrl]);
//     setTitles((prevTitles) => [...prevTitles, '']); // Ajoutez un titre vide pour la nouvelle URL
//     loadInitialTitles([formattedUrl]);
//   } else {
//     console.warn("Cette URL existe déjà.");
//   }
    
//     // setUrls((prevUrls) => [...prevUrls, formattedUrl]);
//     // setTitles((prevTitles) => [...prevTitles, '']);
//     // loadInitialTitles([formattedUrl]);
//   };

// This function is used to add a URL to the URLs
const addUrl = (url) => {
  let formattedUrl = url.trim();
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = `https://${formattedUrl}`;
  }

  // Check if the URL already exists
  if (!urls.includes(formattedUrl)) {
    setUrls((prevUrls) => {
      const newUrls = [...prevUrls, formattedUrl];
      // Save the new URLs to the AsyncStorage
      AsyncStorage.setItem('urls', JSON.stringify(newUrls)).catch(error => 
        console.error('Failed to save URLs', error)
      );
      return newUrls;
    });
    
    setTitles((prevTitles) => [...prevTitles, '']); 
    
    // Load the title for the new URL
    loadInitialTitles([formattedUrl]);
  } else {
    console.warn("Cette URL existe déjà.");
  }
};

  // This function is used to update a URL
  const updateUrl = (index, newUrl) => {
    setUrls((prevUrls) => {
      if (newUrl === null) {
        setTitles((prevTitles) => prevTitles.filter((_, i) => i !== index));
        return prevUrls.filter((_, i) => i !== index);
      } else {
        const updatedUrls = [...prevUrls];
        updatedUrls[index] = newUrl;
        loadInitialTitles([newUrl]);
        return updatedUrls;
      }
    });
  };
 
  const updateTitle = (index, newTitle) => {
    setTitles((prevTitles) => {
      const updatedTitles = [...prevTitles];
      updatedTitles[index] = newTitle;
      return updatedTitles;
    });
  };

  return (
    <UrlContext.Provider value={{ urls, titles, setUrls, addUrl, updateUrl, updateTitle }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrls = () => React.useContext(UrlContext);