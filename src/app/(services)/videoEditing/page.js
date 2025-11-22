"use client";
import React from 'react'
import VideoEditingbanner from '../../../../Component/Services/VideoEditing/VideoEditingbanner';
import Animated from '../../../../Component/Services/VideoEditing/Animated';
import VideoEditingSection from '../../../../Component/Services/VideoEditing/VideoEditingSection';

function VideoEditing() {
    return (
        <div className="container mx-auto bg-gradient-to-r from-[#ccafdda9] via-[#fff] to-[#fff]">
            <div className='pt-4 sm:pt-6'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <div className=' pt-12 relative z-0 overflow-x-hidden'>
                            <VideoEditingbanner />
                            <Animated />
                            <VideoEditingSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoEditing