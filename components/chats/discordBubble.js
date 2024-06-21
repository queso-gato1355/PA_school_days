'use client';

import { useEffect, useState } from 'react';

export default function DiscordBubble({ message, username, profilePic, time, delay = 0 }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);
        
        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`flex justify-start items-start gap-2.5 text-left p-2 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="pt-1 h-8 w-8">
                <img
                    src={profilePic}
                    alt={`${username ? username : "Someone"}'s Profile Pic`}
                    className="rounded-full h-8 w-8"
                />
            </div>
            <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-base font-semibold text-white">
                        {username}
                    </span>
                    <span className="text-sm font-normal text-gray-400">
                        {time}
                    </span>
                </div>
                <p className="text-sm font-normal text-white">{message}</p>
            </div>
        </div>
    );
}
