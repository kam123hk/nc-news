
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Homepage from './components/Homepage';
import Article from './components/Article';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/articles" element={<ArticlesList /> } />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  )
}

export default App
