insert into users 
( 
        auth_id, 
        username, 
        email, 
        name, 
        img
    )
    values 
    (
        $1, 
        $2,
        $3,
        $4,
        $5
    );