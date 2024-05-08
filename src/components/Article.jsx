import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchArticle } from '../api';

function Article() {

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams();

    useEffect(() => {
        fetchArticle(article_id, setArticle, setIsLoading);
    }, [article_id]);

    if (isLoading) return <Loading />
    else {
        return (
            <section>
            <h3>An article about {article.topic}</h3>
            <h2>{article.title}</h2>
            <>by <strong>{article.author}</strong></>
            <br/>
            <>{Date(article.created_at)}</>
            <p></p>
            <img src={article.article_img_url}></img>
            <br/>
            <p align="left">{article.body}</p>
            <ul>Comments: {article.comment_count}</ul>
            <ul>Votes: {article.votes}</ul>
            </section>
        )
    }
}

export default Article;