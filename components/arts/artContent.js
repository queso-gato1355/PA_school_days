"use client";
import { useRouter } from "next/navigation";

export default function ArtContent({ art }) {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-wrap justify-center m-4 p-4">
                <div className="bg-white p-4 m-2 max-w-[85%] min-[669px]:max-w-[600px] rounded-xl shadow-lg hover:shadow-2xl border border-gray-500">
                    {art?.image ? (
                        <img
                            src={art.image}
                            alt={`${art.name}'s artwork`}
                            className="bg-gray-200"
                        />
                    ) : (
                        <div className="w-1/2 h-1/4 bg-gray-200"></div>
                    )}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center text-center h-40 text-2xl">
                    <div className="m-1 text-center flex flex-col justify-start items-center content-center">
                        <div>See more about</div>
                        <div
                            className="relative flex m-1 cursor-pointer group"
                            onClick={() =>
                                router.push(`/artinfo/name/${art.name}`)
                            }
                        >
                            <span className="relative z-10 group-hover:text-gray-300 transition-all duration-100">
                                {art.name}
                            </span>
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
        </>
    );
}
