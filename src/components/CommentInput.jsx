import { useContext, useState } from 'react';
import { postComment } from '../api';
import Loading from './Loading';
import { LoginContext } from '../contexts/Login';

function CommentInput({ article_id, updateCommentCount }) {

    const { user, setUser } = useContext(LoginContext);

    const [body, setBody] = useState("");

    const [isLoading, setIsLoading] = useState(false)

    const commentToPost = {username: user, body};

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
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            alert(error.message || "Failed to post comment");
        }        
    }

    function handleBody(event) {
        setBody(event.target.value)
    }

    if (isLoading) return <Loading/>
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment-body">Your comment:</label>
            <input id="comment-body" onChange={handleBody} value={body} placeholder='Write your comment here' required></input>
            <button>Post comment</button>
        </form>
    )
}

export default CommentInput;