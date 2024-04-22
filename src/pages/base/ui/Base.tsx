import { Navigate, Outlet } from 'react-router-dom';

export function Base() {
    return (
        <>
            <Navigate to='/search' />
            <Outlet />
        </>
    );
}
