
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ArticlesList from './ArticlesList';
import Homepage from './Homepage'
import Article from './Article';
import ErrorPage from './ErrorPage';
import { useState } from 'react';

function Background() {

    const [theme, setTheme] = useState('light')

    return (
    <>
    <Header setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Homepage /> } />
          <Route path="/articles" element={<ArticlesList /> } />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
    )
}

export default Background;