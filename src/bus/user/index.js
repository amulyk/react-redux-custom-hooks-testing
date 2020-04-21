// Core
import React from 'react';

// Custom Hooks
import { useProfile } from './hooks/useProfile';

export const User = () => {
    const {
        role,
        changeUserRoleToAdmin,
        changeUserRoleToCustomer
    } = useProfile();

    return (
        <>
            <h1>User Role: {role}</h1>
            <button
                type="button"
                onClick={changeUserRoleToAdmin}
            >
                Change user role to admin
            </button>
            <button
                type="button"
                onClick={changeUserRoleToCustomer}
            >
                Change user role to customer
            </button>
        </>
    );
};
