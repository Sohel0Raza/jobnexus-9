import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const { status, error, statusText } = useRouteError()

    return (
        <div>
            <div  className='flex flex-col justify-center items-center h-screen'>
                <h3 className='text-7xl font-bold'>{status || 404}</h3>
                <p className='font-semibold'>Page {statusText || 'Not Found'}</p>
                <p>{error?.message}</p>
            </div>

        </div>
    );
};

export default ErrorPage;