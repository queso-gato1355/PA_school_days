"use client";

import { useEffect, useState } from "react";
import ArtBean from "./artBean";

// 화면 크기에 맞춰 격자로 artBean을 보여주는 컴포넌트
// 화면 크기에 능동적으로 바뀌어야 한다.
// api/artists로 GET 요청을 보내 정보를 가져오고
// 가져온 정보를 map으로 돌려 ArtBean 컴포넌트를 생성한다.
export default function ArtBeanList() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/art");
            const data = await res.json();
            setArtists(data);
        }
        fetchData();
    }, []);

    return (
        <div className="w-full min-h-screen flex items-start justify-center p-4">
            {artists && artists.length !== 0 && (
                <div className="w-full flex flex-wrap p-4">
                    {artists.map((artist, index) => {
                        return <ArtBean key={index} artist={artist} />;
                    })}
                </div>
            )}
            {artists && artists.length === 0 && (
                <div className="text-xl w-full flex items-center justify-center">
                    <span className="text-center">
                        The event deadline is not today. Please wait for the
                        event to start!
                        <br /> Checkout the about page for more information.
                    </span>
                </div>
            )}
        </div>
    );
}
