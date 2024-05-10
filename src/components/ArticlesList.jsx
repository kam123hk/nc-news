import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { fetchArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import TopicsList from "./TopicsList";
import ArticleSortByQuery from "./ArticleSortByQuery";

function ArticlesList() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");

    function handleSortBy(sortBy) {
        setSortBy(sortBy);
    }

    function handleOrderBy(orderBy) {
        setOrderBy(orderBy);
    }   

    const [articlesArray, setArticlesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchArticlesData() {
            try {
                const data = await fetchArticles(searchParams.toString(), sortBy, orderBy);
                if (data.message) {
                    alert(data.message);
                    setArticlesArray([]);
                    setIsLoading(false);
                } else {
                    setArticlesArray(data.articles);
                    setIsLoading(false);
                }                
            } catch (error) {
                alert(error.message || "Failed to fetch articles");
            }
        }
        fetchArticlesData();
    }, [searchParams, sortBy, orderBy]);
    

    if (isLoading) return <Loading />
    else {
        return (
        <>
        <h2>Articles</h2>
        <TopicsList />
        <ArticleSortByQuery handleSortBy={handleSortBy} handleOrderBy={handleOrderBy}/>
        <ArticleCard articlesArray={articlesArray} />
        </>
        )
    }
}

export default ArticlesList;