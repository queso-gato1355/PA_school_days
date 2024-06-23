// 입력받은 social media 이름에 따라 해당하는 아이콘과 그에 따른 아이디, 링크 등을 포함하는
// div 박스를 반환하는 함수.

import { twitterIconWhite, discordIcon } from "./icons";

export default function SocialMedia({ mediaName, link, children }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-white"
        >
            <div
                className={`flex-col items-center justify-center text-center p-2 ${
                    mediaName === "twitter" ? "bg-black" : "bg-transparent"
                } shadow-md rounded-xl hover:shadow-xl transition-all duration-200`}
            >
                <div className="flex justify-center">
                    {mediaName === "twitter" ? twitterIconWhite : discordIcon}
                </div>
                <div className="mt-1">{children}</div>
            </div>
        </a>
    );
}
