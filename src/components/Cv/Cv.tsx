"use client"
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

const CvButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Cv.pdf';
        link.download = 'Cv.pdf';
        link.click();
    };

    return (
        <div className='sticky left-[50%] bottom-0 mr-4 mb-4'>
            <button
                onClick={handleDownload}
                className='flex items-center gap-2 font-bold hover:opacity-75 duration-300 bg-[#161824] rounded-2xl px-4 py-1'
            >
                <AiOutlineDownload size={48} />
                Download CV
            </button>
        </div>
    );
};

export default CvButton;
