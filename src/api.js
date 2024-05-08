export async function fetchArticles(setArticlesArray, setIsLoading) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/articles`);
        const data = await response.json();
        setArticlesArray(data.articles);
        setIsLoading(false)
    } catch (error) {
        // handle error
    }
};

export async function fetchArticle(article_id, setArticle, setIsLoading) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/articles/${article_id}`);
        const data = await response.json();
        setArticle(data.article);
        setIsLoading(false);
    } catch (error) {
        // handle error
    }
};

export async function fetchComments(article_id, setCommentsArray, setIsLoading) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/articles/${article_id}/comments`);
        const data = await response.json();
        setCommentsArray(data.comments);
        setIsLoading(false);
    } catch (error) {
        // handle error
    }
}