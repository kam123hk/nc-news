import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchArticle, patchVote } from '../api';
import CommentsList from './CommentsList';
import Expand from './Expand';

function Article() {

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const [voteChange, setVoteChange] = useState(0);

    useEffect(() => {
        fetchArticle(article_id, setArticle, setIsLoading);
    }, [article_id]);

    async function handleVote(voteChange) {
        try {
            setVoteChange(currentVoteChange => currentVoteChange + voteChange);
            await patchVote(article_id, voteChange);        
        } catch (error) {
            setVoteChange(currentVoteChange => currentVoteChange - voteChange);
            alert("Your vote did not count. Try again later.")
        }        
    }

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
                    <li>Votes: {article.votes + voteChange}</li>
                    <button onClick={() => handleVote(-1)} disabled={voteChange === -1}>-</button><button onClick={() => handleVote(1)} disabled={voteChange === 1}>+</button>
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