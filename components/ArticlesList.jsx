import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

function ArticlesList() {

    const [articlesArray, setArticlesArray] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch(`https://first-nc-project.onrender.com/api/articles`);
                console.log(response, 'bye');
                const data = await response.json();
                setArticlesArray(data.articles);
            } catch (error) {
                // handle error
            }
        }
        fetchArticles();
    }, []);

    function articlesCardMap() {
        return articlesArray.map(article => {
            return (
                <div key={article.article_id}>
                    <li><strong>{article.title}</strong></li>
                    <>by <strong>{article.author}</strong></>
                    <br/>
                    <img src={article.article_img_url} />
                    <p></p>
                </div>
            )
        })
    }
    
    return (
    <>
    <h2>Articles</h2>
    <ArticleCard articlesCardMap={articlesCardMap()} />
    </>
    )
}

export default ArticlesList;