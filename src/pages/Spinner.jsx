import React from 'react';

const Spinner = ({ size = 'w-8 h-8' }) => {
    return (
        <div className={`flex justify-center items-center`}>
            <div
                className={`${size} border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin`}
            ></div>
        </div>
    );
};

export default Spinner;
