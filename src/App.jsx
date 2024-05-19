
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Homepage from './components/Homepage';
import Article from './components/Article';
import ErrorPage from './components/ErrorPage';
import { createContext, useState, useEffect } from 'react';
import LoginProvider from './contexts/Login';

export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <LoginProvider>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/articles" element={<ArticlesList /> } />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeContext.Provider>
    </LoginProvider>
  )
}

export default App
