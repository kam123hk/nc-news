import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { fetchArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import TopicsList from "./TopicsList";

function ArticlesList() {

    const [searchParams, setSearchParams] = useSearchParams();

    // for later:
    const filterByQuery = searchParams.get("sort_by");   

    const [articlesArray, setArticlesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchArticlesData() {
        const data = await fetchArticles(searchParams.toString());
        if (data.message) {
            alert(data.message);
            setArticlesArray([]);
            setIsLoading(false);
        } else {
            setArticlesArray(data.articles);
            setIsLoading(false);
        }}
        fetchArticlesData();        
    }, [searchParams]);
    
    if (isLoading) return <Loading />
    else {
        return (
        <>
        <h2>Articles</h2>
        <TopicsList />
        <ArticleCard articlesArray={articlesArray} />
        </>
        )
    }
}

export default ArticlesList;