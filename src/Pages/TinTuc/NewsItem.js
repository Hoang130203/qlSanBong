function NewsItem({ news }) {

    return (
        <div className="news-item">
            <img
                src={news.urlToImage}
                alt={news.title}
            />
            <div className="news-details">
                <h3 style={{ color: 'brown', fontSize: '25px' }}>{news.title}</h3>
                <p style={{ color: 'green', fontSize: '18px' }}>{news.description}</p>
                <p>Published by: <span style={{ color: 'blue' }}>{news.author}</span></p>
                <p>Publish Date: <span style={{ color: 'blue' }}>{news.publishedAt.slice(0, 10)}</span></p>
                <a href={news.url} style={{ color: 'blue' }} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
}

export default NewsItem;