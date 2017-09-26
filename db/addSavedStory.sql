INSERT INTO saved_news_articles
    (
        user_id,
        title,
        urlToImage,
        url,
        author,
        description
    ) 
    VALUES
    (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6
    );
