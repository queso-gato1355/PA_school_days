import { Suspense } from "react";
import { notFound } from "next/navigation";
import ArtContent from "@/components/arts/artContent";
import { getImageDimensions } from "@/utils/functions";
import LoadingSpinner from "@/components/loadings";

import fs from 'fs';
import path from 'path';

async function getArt(artId) {
    const filePath = path.join(process.cwd(), 'public', 'artist_info.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const art = data.artistList.find((artist) => artist.id === artId);

    return art;
}

export async function generateMetadata({ params }) {
    const art = await getArt(params.artId);
    if (!art) return notFound();

    const { width, height } = await getImageDimensions(art.image);

    const artistName = decodeURIComponent(art.name);

    return {
        title: "PA School Days",
        description: `${artistName}'s art! Check out here!`,
        openGraph: {
            title: "PA School Days",
            description: `${artistName}'s art! Check out here!`,
            images: [
                {
                    url: art.image,
                    width: width,
                    height: height,
                    alt: `${artistName}'s artwork`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "PA School Days",
            description: `${artistName}'s art! Check out here!`,
            images: [art.image],
        },
    };
}

export default async function ArtPage({ params }) {
    const art = await getArt(params.artId);
    if (!art) return notFound();

    return (
        <div className="w-full min-h-screen flex-col items-start justify-center">
            <Suspense fallback={<LoadingSpinner color={"magenta"} />}>
                <ArtContent art={art} />
            </Suspense>
        </div>
    );
}
