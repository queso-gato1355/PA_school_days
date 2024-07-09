"use client";
import { useRouter } from "next/navigation";
import SocialMedia from "@/components/elements/socialMedia";

export default function ArtistContent({ artistName, artistData }) {
    const router = useRouter();

    return (
        <>
            <div className="text-center p-4 m-4 max-[669px]:p-1 max-[669px]:m-1">
                <label className="text-5xl max-[669px]:text-2xl font-dovemayo font-bold">
                    {" "}
                    {artistName}'s Art{" "}
                </label>
            </div>
            <div className="flex justify-center">
                <div className="flex overflow-x-auto justify-start m-4 p-4">
                    {artistData.map((art) => (
                        <div
                            key={art.id}
                            className="bg-white p-4 m-2 rounded-xl min-w-[500px] max-w-[85%] min-[669px]:max-w-[600px] shadow-lg hover:shadow-2xl border border-gray-500 cursor-pointer transition-all duration-300 hover:z-10"
                            onClick={() => router.push(`/artinfo/id/${art.id}`)}
                        >
                            {art?.image ? (
                                <img
                                    src={art.image}
                                    alt={`${artistName}'s artwork`}
                                    className="bg-gray-200"
                                />
                            ) : (
                                <div className="w-1/2 h-1/4 bg-gray-200"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center p-4 m-4">
                <label className="text-xl"> Contact Link </label>
                <div className="flex justify-center p-4 mt-2">
                    <div className="flex items-center">
                        {artistData[0].socials &&
                            artistData[0].socials.map((social) => (
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
        </>
    );
}
