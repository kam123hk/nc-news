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
                const topicsArray = await fetchTopics();
                setTopicsArray(topicsArray);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                // handle error
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