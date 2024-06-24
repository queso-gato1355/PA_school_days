import { Suspense } from "react";
import { notFound } from "next/navigation";
import ArtistContent from "@/components/arts/artistContent";
import { getImageDimensions } from "@/utils/functions";
import LoadingSpinner from "@/components/loadings";

import fs from 'fs';
import path from 'path';

export async function getArtistData(artistName) {
    const filePath = path.join(process.cwd(), 'public', 'artist_info.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const artists = data.artistList.filter((artist) => artist.name === artistName);

    return artists;
}

export async function generateMetadata({ params }) {
    const artistData = await getArtistData(params.artistName);
    if (!artistData || artistData.length === 0) return notFound();

    const firstArtwork = artistData[0];
    const { width, height } = await getImageDimensions(firstArtwork.image);

    return {
        title: "PA School Days",
        description: `${params.artistName}'s artworks! Check them out here!`,
        openGraph: {
            title: "PA School Days",
            description: `${params.artistName}'s artworks! Check them out here!`,
            images: [
                {
                    url: firstArtwork.image,
                    width: width,
                    height: height,
                    alt: `${params.artistName}'s artwork`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "PA School Days",
            description: `${params.artistName}'s artworks! Check them out here!`,
            images: [firstArtwork.image],
        },
    };
}

export default async function ArtistPage({ params }) {
    const artistData = await getArtistData(params.artistName);
    if (!artistData || artistData.length === 0) return notFound();

    return (
        <div className="w-full min-h-screen flex-col items-start justify-center">
            <Suspense fallback={<LoadingSpinner color={"magenta"} />}>
                <ArtistContent
                    artistName={params.artistName}
                    artistData={artistData}
                />
            </Suspense>
        </div>
    );
}
