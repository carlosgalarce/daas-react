import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../store/ducks/auth-duck';
import { AuthStorage } from '../../store/ducks/auth-duck/auth-storage';

export default function Logout() {
    const dispatch = useDispatch();

    useEffect(() => {
        AuthStorage.clearStorage();
        dispatch(AuthActions.logout());
    }, [dispatch]);
    return (
        <></>
    );
}