import { useEffect, useState } from 'react';
import TopicCards from './TopicCards';
import { fetchTopics } from '../api';
import Loading from './Loading';

function TopicsList() {

    const [topicsArray, setTopicsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchTopicsData() {
            try {
                const topicsData = await fetchTopics();
                setTopicsArray(topicsData.topics);
                setIsLoading(false);
            } catch (error) {
                alert(error.message || "Failed to fetch topics")
                setIsLoading(false);                
            }
        }
        fetchTopicsData();
    }, []);

    
    if (isLoading) return <Loading />
    return (
        <>
        <h3>filter by topic:</h3>
        <TopicCards topicsArray={topicsArray} />
        </>
    )
}

export default TopicsList;