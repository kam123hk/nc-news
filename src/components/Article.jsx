import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchArticle } from '../api';
import CommentsList from './CommentsList';
import Expand from './Expand';

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

                <p>{Date(article.created_at)}</p>

                <img src={article.article_img_url}></img>
                <br/>

                <p align="left">{article.body}</p>

                <ul style={{ listStyleType: 'none' }}>
                    <li>Votes: {article.votes}</li>
                    <li>Comments: {article.comment_count}</li>
                </ul>

                <Expand contentDescriptor="comments">                
                    <CommentsList article_id={article.article_id} />
                </Expand>

            </section>
        )
    }
}

export default Article;