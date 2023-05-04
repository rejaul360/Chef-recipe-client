import React from 'react';
import error from '../../../assets/error.jpg'
import LazyLoad from 'react-lazy-load';
import Header from '../Header/Header';


const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center h-screen mt-5'>
                <LazyLoad>
                <img src='https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif' alt="" />
                </LazyLoad>
            </div>

        </div>
    );
};

export default ErrorPage;