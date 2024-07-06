// 입력받은 social media 이름에 따라 해당하는 아이콘과 그에 따른 아이디, 링크 등을 포함하는
// div 박스를 반환하는 함수.

import { twitterIconWhite, discordIcon, defaultIcon } from "../icons";

export default function SocialMedia({ mediaName, link, children }) {
    let bgColor = "bg-transparent";
    if (mediaName === "twitter") {
        bgColor = "bg-black";
    } else if (mediaName === "discord") {
        bgColor = "bg-[#5865f2]";
    }

    let icon = defaultIcon;
    if (mediaName === "twitter") {
        icon = twitterIconWhite;
    } else if (mediaName === "discord") {
        icon = discordIcon;
    }

    if (link === "None")
        return (
            <div className="text-white min-w-40">
                <div
                    className={`flex-col items-center justify-center text-center p-2 ${bgColor} shadow-md rounded-xl`}
                >
                    <div className="flex justify-center">{icon}</div>
                    <div className="mt-1">{children}</div>
                </div>
            </div>
        );

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-white"
        >
            <div
                className={`flex-col items-center justify-center text-center p-2 ${bgColor} shadow-md rounded-xl hover:shadow-xl transition-all duration-200 min-w-40`}
            >
                <div className="flex justify-center">{icon}</div>
                <div className="mt-1">{children}</div>
            </div>
        </a>
    );
}
