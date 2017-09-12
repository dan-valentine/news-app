INSERT INTO news_source_look_up 
    (
        source_id,
        name,
        description,
        url,
        user_id 
    )
    values 
    (
        $1,
        $2,
        $3,
        $4,
        $5
    )
    RETURNING *;