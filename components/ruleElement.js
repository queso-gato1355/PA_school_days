'use client';

export default function RuleElement({ numbering, children, hoverColor }) {
    return (
        <li
            className="rounded-xl bg-transparent shadow-md hover:rotate-1 m-2 transition-all duration-300"
            style={{
                '--hover-color': hoverColor || '#e3388b',
            }}
        >
            <style jsx>{`
                li:hover {
                    background: linear-gradient(to right, transparent, var(--hover-color));
                }
            `}</style>
            <div className="w-full flex items-center justify-center p-2">
                <div className="w-full flex items-center flex-wrap p-4 space-x-2 min-[670px]:space-x-0">
                    <div className="w-1/12 p-2 text-3xl">{numbering}</div>
                    <div className="w-11/12 p-2">{children}</div>
                </div>
            </div>
        </li>
    );
}
