import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { fetchComments } from "../api";
import Loading from "./Loading";
import CommentInput from "./CommentInput";

function CommentsList({ article_id, updateCommentCount }) {

    const [commentsArray, setCommentsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCommentsData() {
            try {
                const data = await fetchComments(article_id);
                setCommentsArray(data.comments);
                setIsLoading(false);
            } catch (error) {
                alert(error.message || "Failed to fetch comments");
                setIsLoading(false);
            }
        };
        fetchCommentsData();
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