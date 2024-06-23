"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ArtPage({ params }) {
    const router = useRouter();
    const { artId } = params;
    const [art, setArt] = useState(null);

    useEffect(() => {
        async function fetchArtist() {
            const response = await fetch(`/api/art?id=${artId}`);
            const data = await response.json();
            console.log(data);
            setArt(data);
        }
        fetchArtist();
    }, []);

    return (
        <div className="w-full min-h-screen flex-col items-start justify-center">
            <div className="flex flex-wrap justify-center m-4 p-4">
                <div className="bg-white p-4 m-2 rounded-xl shadow-lg hover:shadow-2xl border border-gray-500">
                    <img
                        src={art?.image}
                        alt={`${art?.name}'s artwork`}
                        className="bg-gray-200 max-w-1/2"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center text-center h-40 text-2xl">
                    <p className="m-1">See more about </p>
                    <div
                        className="relative flex m-1 cursor-pointer group h-10"
                        onClick={() =>
                            router.push(`/artinfo/name/${art?.name}`)
                        }
                    >
                        <span className="relative z-10 group-hover:text-gray-300 transition-all duration-100">{art?.name}</span>
                        <span
                            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-100"
                            style={{
                                backgroundImage: 'url("/blood_splash.png")',
                                zIndex: 0,
                            }}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
