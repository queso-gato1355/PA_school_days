"use client";

import { useState, useEffect } from "react";

export default function ArtBean() {
    const [seed, setSeed] = useState("picsum");
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const generateRandomString = () => {
            const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < 9; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * characters.length)
                );
            }
            return result;
        };
        setSeed(generateRandomString());

        // Set a random rotation angle between -20 and 20 degrees
        const randomRotation = Math.floor(Math.random() * 41) - 20;
        setRotation(randomRotation);
    }, []);

    return (
        <div className="w-full min-[670px]:w-1/2 min-[1000px]:w-1/3 min-[1200px]:w-1/4 min-[1800px]:w-1/5 min-[2400px]:w-1/6 flex justify-center mt-3 mb-3">
            <div 
                className={`relative m-4 rounded-lg shadow-[#863c6d] shadow-lg bg-[#fffff5] hover:shadow-[#552c48] hover:shadow-2xl border border-gray-300 overflow-hidden w-64 h-72 transition-all duration-300 hover:z-10`}
                style={{ 
                    transform: `rotate(${isHovered ? 0 : rotation}deg) scale(${isHovered ? 1.1 : 1})`
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-full h-5/6 p-4 transition-transform duration-300">
                    <img
                        src={`https://picsum.photos/seed/${seed}/400/600`}
                        alt="art"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="text-center text-gray-700">
                    <p>Photo by John Doe</p>
                </div>
            </div>
        </div>
    );
}
