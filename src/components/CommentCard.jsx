function CommentCard( { commentsArray }) {

    function commentsCardMap() {
        
        return (

            <ul style={{ listStyleType: 'none' }}>
                {commentsArray.map(comment => {
                    return (
                        <div key={comment.comment_id}>
                    
                            <li>
                                <div align="left">{new Date(comment.created_at).toDateString()} <strong>{comment.author}</strong> says:</div>
                                <blockquote align="left"> {comment.body} </blockquote>
                                <div align="left">{comment.votes} votes.</div>
                                
                            </li>
                            <br/>
                                
                        </div>
                    )
                })}
            </ul>
        )   
    }

    return (
        <>{commentsCardMap()}</>
    )

}

export default CommentCard;