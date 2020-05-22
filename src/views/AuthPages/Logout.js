import React, { useEffect } from 'react';
import { useAuth0 } from './react-auth0-spa';

export default function Logout() {
    const { logout, } = useAuth0();

    useEffect(() => {
        logout({
            returnTo: `${window.location.origin}/auth/login`
        });
    }, [logout]);
    return (
        <></>
    );
}