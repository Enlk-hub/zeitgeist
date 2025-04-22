import React, { createContext, useState, useEffect, useContext } from 'react';
import newsData from './newsData.json';

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [collections, setCollections] = useState([]);
  const [newsAudio, setNewsAudio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNews(newsData.newsItems);
    setCollections(newsData.collections);
    
    // Добавляем поддержку newsAudio
    if (newsData.newsAudio && Array.isArray(newsData.newsAudio)) {
      setNewsAudio(newsData.newsAudio);
    } else {
      // Если данных аудио нет, создаем примеры для тестирования
      setNewsAudio([
        {
          id: 1,
          category: "POLITICS",
          title: "Economic reforms lead to market growth",
          description: "A detailed analysis of how recent economic reforms have positively impacted local markets and boosted financial growth",
          audioUrl: "/zeitgeist/podcast/first.mp3",
          date: "March 28, 2025",
          duration: 180
        },
        {
          id: 2,
          category: "CULTURE",
          title: "Art exhibition draws record crowds",
          description: "The international art exhibition at the National Museum has broken all attendance records with its innovative displays",
          audioUrl: "/zeitgeist/audio/art-exhibition.mp3",
          date: "March 25, 2025",
          duration: 210
        }
      ]);
    }
    
    setLoading(false);
  }, []);

  const getFeaturedNews = () => news.filter(item => item.featured);

  const getNewsById = (id) => news.find(item => item.id === id);

  const getNewsByCategory = (category) => news.filter(item => item.category === category);

  const getCollectionById = (id) => collections.find(collection => collection.id === id);

  const getCollectionNews = (collectionId) => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return [];
    return collection.newsIds.map(id => getNewsById(id)).filter(Boolean);
  };

  const getNewsAudio = () => newsAudio;

  const getNewsAudioById = (id) => newsAudio.find(item => item.id === id);

  const value = {
    news,
    collections,
    newsAudio,
    loading,
    getFeaturedNews,
    getNewsById,
    getNewsByCategory,
    getCollectionById,
    getCollectionNews,
    getNewsAudio,
    getNewsAudioById
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default NewsContext;