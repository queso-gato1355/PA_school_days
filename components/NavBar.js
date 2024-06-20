export default function NavBar() {
    return (
        <nav className="flex-col justify-center p-2">
            <div className="w-full text-center p-2">
                <span className="text-5xl font-extrabold">PA SCHOOL DAYS</span>
            </div>
            <div className="flex justify-center">
                <button className="p-2">
                    <a href="/">
                        <div className="hover:shadow-lg hover:shadow-white rounded-full">
                            Home
                        </div>
                    </a>
                </button>
                <button className="p-2">
                    <a href="/about">
                        <div className="hover:shadow-lg hover:shadow-white rounded-full">
                            About
                        </div>
                    </a>
                </button>
            </div>
        </nav>
    );
}
