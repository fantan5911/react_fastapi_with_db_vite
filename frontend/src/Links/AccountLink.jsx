import React from 'react';
import { Link } from 'react-router-dom';

const AccountLink = ({children, link, user, setUser}) => {
    return (
        <Link
             to={link} 
             onClick={() => setUser({email: '', password: ''})}
             style={{margin: '10px'}}>
             {children}
        </Link>
    );
};

export default AccountLink;