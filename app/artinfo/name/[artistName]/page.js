"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SocialMedia from "@/components/socialMedia";

export default function ArtistPage({ params }) {
    const router = useRouter();
    const { artistName } = params;
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function fetchArtist() {
            const response = await fetch(`/api/art?artist=${artistName}`);
            const data = await response.json();
            setArtist(data);
        }
        fetchArtist();
    }, []);

    return (
        <div className="w-full min-h-screen flex-col items-start justify-center">
            <div className="text-center p-4 m-4 max-[669px]:p-1 max-[669px]:m-1">
                <label className="text-5xl max-[669px]:text-2xl font-bazzi font-bold">
                    {" "}
                    {artistName}'s Art{" "}
                </label>
            </div>
            <div className="flex flex-wrap justify-center m-4 p-4">
                {artist &&
                    artist.map((artist) => (
                        <div
                            className="bg-white p-4 m-2 rounded-xl max-w-[80%] shadow-lg hover:shadow-2xl border border-gray-500 cursor-pointer transition-all duration-300 hover:z-10"
                            onClick={() =>
                                router.push(`/artinfo/id/${artist.id}`)
                            }
                        >
                            {artist?.image ? (
                                <img
                                    src={artist?.image}
                                    alt={`${artistName}'s artwork`}
                                    className="bg-gray-200"
                                />
                            ) : (
                                <div className="w-1/2 h-1/4 bg-gray-200"></div>
                            )}
                        </div>
                    ))}
            </div>
            <div className="text-center p-4 m-4">
                <label className="text-xl"> Contact Link </label>
                <div className="flex justify-center p-4 mt-2">
                    <div className="flex items-center">
                        {artist &&
                            artist[0].socials &&
                            artist[0].socials.map((social) => (
                                <SocialMedia
                                    key={social.media}
                                    mediaName={social.media}
                                    link={social.link}
                                >
                                    {social.id}
                                </SocialMedia>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
