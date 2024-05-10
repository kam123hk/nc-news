import { Link } from 'react-router-dom';

function TopicCards({ topicsArray }) {

    function topicCardsMap() {
        return topicsArray.map(topic => {
            return (
                <div key={topic.slug}>
                    <li>
                        <Link to={`/articles?topic=${topic.slug}`}><strong>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</strong></Link>                   
                    </li>
                    
                </div>
            )
        })
    }

    return (
        <>{topicCardsMap()}</>
    )
}

export default TopicCards;