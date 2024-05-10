function ArticleSortByQuery({ handleSortBy, handleOrderBy }) {

    return (
        <>
        <label htmlFor="sort-by"><strong>sort by:</strong> </label>
        <select onChange={(e) => handleSortBy(e.target.value)}>
            <option value="created_at">date</option>
            <option value="comment_count">comments</option>
            <option value="votes">votes</option>
        </select>
        <select onChange={(e) => handleOrderBy(e.target.value)}>
            <option value="desc">descending</option>
            <option value="asc">ascending</option>
        </select>
        </>
    )
}

export default ArticleSortByQuery;