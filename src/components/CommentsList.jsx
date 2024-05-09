import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { fetchComments } from "../api";
import Loading from "./Loading";
import CommentInput from "./CommentInput";

function CommentsList({ article_id, updateCommentCount }) {

    const [commentsArray, setCommentsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments(article_id, setCommentsArray, setIsLoading);
    }, [commentsArray])

    if (isLoading) return <Loading />
    else {
        return (
        <>
        <CommentInput article_id={article_id} updateCommentCount={updateCommentCount}/>
        <CommentCard commentsArray={commentsArray} updateCommentCount={updateCommentCount} />            
        </>
        )
    }
}

export default CommentsList;