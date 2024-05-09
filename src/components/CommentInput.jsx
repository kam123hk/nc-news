import { useState } from 'react';
import { postComment } from '../api';
import Loading from './Loading';

function CommentInput({ article_id, updateCommentCount }) {

    const [body, setBody] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const commentToPost = {username, body};

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setIsLoading(true);
            const postedComment = await postComment(article_id, commentToPost);
            if (postedComment.message) {
                alert(postedComment.message);
            } else {
                updateCommentCount(1);
                setBody("");
                setUsername("");
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            // handle error
        }
        
    }

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handleBody(event) {
        setBody(event.target.value)
    }

    if (isLoading) return <Loading/>
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" onChange={handleUsername} value={username} placeholder='Write your username here' required></input>
            <label htmlFor="comment-body">Your comment:</label>
            <input id="comment-body" onChange={handleBody} value={body} placeholder='Write your comment here' required></input>
            <button>Post comment</button>
        </form>
    )
}

export default CommentInput;