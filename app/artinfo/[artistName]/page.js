"use client";
// app/artinfo/[artistName]/page.js
// artist 이름이 있는 경우 page.js에서 띄워야 하는 페이지.

import { useState, useEffect } from "react";
import SocialMedia from "@/components/socialMedia";

export default function ArtistPage({ params }) {
    const { artistName } = params;
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function fetchArtist() {
            const response = await fetch(`/api/artists?artist=${artistName}`);
            const data = await response.json();
            setArtist(data);
        }
        fetchArtist();
    }, [artistName]);

    return (
        <div className="w-full min-h-screen flex-col items-start justify-center">
            <div className="flex justify-center m-4 p-4">
                <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl border border-gray-500">
                    <img
                        src={artist?.image}
                        alt={artistName}
                        className="bg-gray-200 max-w-1/2"
                    />
                </div>
            </div>
            <div className="text-center p-4 m-4">
                <label className="text-xl"> Contact Link </label>
                <div className="flex justify-center p-4 mt-2">
                    <div className="flex items-center">
                        {artist &&
                            artist.socials &&
                            artist.socials.map((social) => (
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
