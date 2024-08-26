import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urls, setUrls] = useState([]);
  const [titles, setTitles] = useState([]);

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
const addUrl = (url) => {
  let formattedUrl = url.trim();
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = `https://${formattedUrl}`;
  }

  // Vérifiez si l'URL existe déjà
  if (!urls.includes(formattedUrl)) {
    setUrls((prevUrls) => {
      const newUrls = [...prevUrls, formattedUrl];
      // Sauvegardez les nouvelles URLs immédiatement
      AsyncStorage.setItem('urls', JSON.stringify(newUrls)).catch(error => 
        console.error('Failed to save URLs', error)
      );
      return newUrls;
    });
    
    setTitles((prevTitles) => [...prevTitles, '']); // Ajoutez un titre vide pour la nouvelle URL
    
    // Chargez le titre pour la nouvelle URL uniquement
    loadInitialTitles([formattedUrl]);
  } else {
    console.warn("Cette URL existe déjà.");
  }
};

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