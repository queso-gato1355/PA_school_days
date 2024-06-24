export default function ListElement({ numbering, children }) {
    return (
        <li className="rounded-xl bg-transparent shadow-md hover:rotate-1 hover:bg-gradient-to-r hover:from-transparent hover:to-[#e3388b] m-2 transition-all duration-300">
            <div className="w-full flex items-center justify-center p-2">
                <div className="w-full flex items-center flex-wrap p-4 space-x-2 min-[670px]:space-x-0">
                    <div className="w-1/12 p-2 text-3xl">{numbering}</div>
                    <div className="w-11/12 p-2">{children}</div>
                </div>
            </div>
        </li>
    );
}
