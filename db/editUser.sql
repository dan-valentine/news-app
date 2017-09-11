UPDATE users SET
( 
        auth_id, 
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
        $5,
        $6
    )
    WHERE 
    user_id = $1;