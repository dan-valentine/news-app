UPDATE users SET
( 
        username, 
        email, 
        name
    )
    = 
    (
        $2,
        $3,
        $4
    )
    WHERE 
    user_id = $1
    returning *;