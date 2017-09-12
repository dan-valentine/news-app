INSERT INTO news_source_look_up 
    (
        source_id,
        user_id 
    )
    values 
    (
        $1, 
        $2
    )
    RETURNING *;