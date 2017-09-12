UPDATE users SET
( 
        username, 
        email, 
        name, 
        img
    )
    = 
    (
        $2,
        $3,
        $4,
        $5
    )
    WHERE 
    user_id = $1;