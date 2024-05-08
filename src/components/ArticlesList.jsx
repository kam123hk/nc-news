import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { fetchArticles } from "../api";

function ArticlesList() {

    const [articlesArray, setArticlesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {        
        fetchArticles(setArticlesArray, setIsLoading);
    }, []);
    
    if (isLoading) return <Loading />
    else {
        return (
        <>
        <h2>Articles</h2>
        <ArticleCard articlesArray={articlesArray} />
        </>
        )
    }
}

export default ArticlesList;