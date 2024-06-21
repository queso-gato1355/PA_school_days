import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex-col justify-center p-2">
            <div className="w-full text-center p-2">
                <span className="text-5xl font-extrabold">PA SCHOOL DAYS</span>
            </div>
            <div className="flex justify-center space-x-2">
                <button className="p-2 relative group">
                    <Link href="/">
                        <span className="relative z-10">Home</span>
                        <span
                            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-100"
                            style={{
                                backgroundImage: 'url("/blood_splash.png")',
                                zIndex: 0,
                            }}
                        ></span>
                    </Link>
                </button>
                <button className="p-2 relative group">
                    <Link href="/about">
                        <span className="relative z-10">About</span>
                        <span
                            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-100"
                            style={{
                                backgroundImage: 'url("/blood_splash.png")',
                                zIndex: 0,
                            }}
                        ></span>
                    </Link>
                </button>
            </div>
        </nav>
    );
}
