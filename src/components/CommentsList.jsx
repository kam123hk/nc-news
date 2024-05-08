import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { fetchComments } from "../api";
import Loading from "./Loading";

function CommentsList({ article_id }) {

    const [commentsArray, setCommentsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments(article_id, setCommentsArray, setIsLoading);
    }, [])

    if (isLoading) return <Loading />
    else {
        return (
        <CommentCard commentsArray={commentsArray} />
        )
    }
}

export default CommentsList;