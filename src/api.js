export async function fetchArticles(searchParamsString="", sortBy, orderBy) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/articles?${searchParamsString}&sort_by=${sortBy}&order=${orderBy}`);
        return await response.json();
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



export async function patchVote(article_id, voteChange) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/articles/${article_id}`,
            {
                method: "PATCH",
                headers: {
                            "Content-Type": "application/json",
                          },
                body: JSON.stringify({inc_votes: voteChange})
            }
        )
        await response.json();
    } catch (error) {
        alert(error.message);
    }
}

export async function postComment(article_id, commentToPost) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/articles/${article_id}/comments`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(commentToPost),
            }
        )
        return await response.json();

    } catch (error) {
        // handle error
    }
}

export async function deleteComment(comment_id) {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/comments/${comment_id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        if (!response.ok) throw new Error("Error, comment not deleted.")
    } catch (error) {
        throw error;
    }
}

export async function fetchTopics() {
    try {
        const response = await fetch(`https://first-nc-project.onrender.com/api/topics`);
        const data = await response.json();
        return data.topics;
    } catch (error) {
        // handle error
    }
}