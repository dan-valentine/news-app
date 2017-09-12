INSERT INTO users 
( 
        auth_id, 
        username, 
        email, 
        name, 
        img
    )
    VALUES 
    (
        $1, 
        $2,
        $3,
        $4,
        $5
    )
    RETURNING *;