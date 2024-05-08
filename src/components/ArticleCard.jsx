import { Link } from 'react-router-dom'

function ArticleCard({ articlesArray }) {

    function articlesCardMap() {
        return articlesArray.map(article => {
            return (
                <div key={article.article_id}>
                    <li><Link to={`/articles/${article.article_id}`}><strong>{article.title}</strong></Link></li>
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
    <ol>
        { articlesCardMap() }
    </ol>
    </>
    )
}

export default ArticleCard;