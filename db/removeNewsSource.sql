DELETE FROM news_source_look_up 
    WHERE 
    source_id = $1
    AND
    user_id = $2;