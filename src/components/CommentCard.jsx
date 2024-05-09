import { useState } from "react";
import { deleteComment } from "../api";
import Loading from "./Loading";


function CommentCard( { commentsArray, updateCommentCount }) {

    const [isLoading, setIsLoading] = useState(false)

    async function handleClick(commentId) {
        try {
            setIsLoading(true);
            await deleteComment(commentId);
            updateCommentCount(-1)
        } catch (error) {
            alert(error.message)
        } finally {  
            setIsLoading(false);
        }
    }
    
    function handleHidden(username) {
        return username !== "tickle122"
    }

    function commentsCardMap() {
        
        return (

            <ul style={{ listStyleType: 'none' }}>
                {commentsArray.map(comment => {
                    return (
                        <div key={comment.comment_id}>
                    
                            <li>
                                <div align="left">{new Date(comment.created_at).toDateString()} <strong>{comment.author}</strong> says:</div>
                                <blockquote align="left"> {comment.body} </blockquote>
                                <div align="left">{comment.votes} votes.
                                <button hidden={handleHidden(comment.author)} onClick={() => handleClick(comment.comment_id)} style={{fontSize: 'small'}}>delete</button>
                                </div>
                            </li>
                            <br/>
                                
                        </div>
                    )
                })}
            </ul>
        )   
    }

    if (isLoading) return <Loading />
    return (
        <>{commentsCardMap()}</>
    )

}

export default CommentCard;