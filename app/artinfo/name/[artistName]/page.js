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
            <div className="text-center p-4 m-4">
                <label className="text-5xl font-bazzi font-bold">
                    {" "}
                    {artistName}'s Art{" "}
                </label>
            </div>
            <div className="flex flex-wrap justify-center m-4 p-4">
                {artist &&
                    artist.map((artist) => (
                        <div
                            className="bg-white p-4 m-2 rounded-xl shadow-lg hover:shadow-2xl border border-gray-500"
                            onClick={() =>
                                router.push(`/artinfo/id/${artist.id}`)
                            }
                        >
                            <img
                                src={artist?.image}
                                alt={`${artistName}'s artwork`}
                                className="bg-gray-200 max-w-1/2"
                            />
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
