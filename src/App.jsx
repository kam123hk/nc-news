import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';
import Homepage from '../components/Homepage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/articles" element={<ArticlesList /> } />
      </Routes>
    </>
  )
}

export default App
