import DiscordBubble from "@/components/chats/discordBubble";
import ListElement from "@/components/elements/listElement";
import RuleElement from "@/components/elements/ruleElement";
import HyperLink from "@/components/hyperLink";
import { twitterIcon, discordIcon } from "@/components/icons";

export default function About() {
    return (
        <div className="text-center flex-col justify-center items-center">
            {/* 이 이벤트가 열리게 된 계기 설명 */}
            <div className="w-full bg-[#f57bcc] p-4 flex max-[669px]:flex-col justify-center items-center space-x-10 max-[860px]:space-x-4 max-[669px]:space-x-0">
                <section className="p-2 m-2 border border-gray-800 bg-gray-600 rounded-2xl max-w-[700px] min-w-[300px] shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex-col justify-center">
                        <DiscordBubble
                            profilePic="/profile/adrian_profile.jpg"
                            username="Adrian"
                            message="Hey, ICE!"
                            time="2:00 PM"
                            delay={100}
                        />
                        <DiscordBubble
                            profilePic="/profile/ice_profile.jpg"
                            username="ICE"
                            message="What's up?"
                            time="2:01 PM"
                            delay={300}
                        />
                        <DiscordBubble
                            profilePic="/profile/adrian_profile.jpg"
                            username="Adrian"
                            message="We need to do something. Or, the fandom is going to die."
                            time="2:02 PM"
                            delay={500}
                        />
                        <DiscordBubble
                            profilePic="/profile/ice_profile.jpg"
                            username="ICE"
                            message="Huh? What do you mean?"
                            time="2:03 PM"
                            delay={700}
                        />
                        <DiscordBubble
                            profilePic="/profile/adrian_profile.jpg"
                            username="Adrian"
                            message="You know, we need to do something to keep the fandom alive. How about a school event?"
                            time="2:04 PM"
                            delay={900}
                        />
                        <DiscordBubble
                            profilePic="/profile/ice_profile.jpg"
                            username="ICE"
                            message="What's that? Is it like, an art contest?"
                            time="2:05 PM"
                            delay={1100}
                        />
                        <DiscordBubble
                            profilePic="/profile/adrian_profile.jpg"
                            username="Adrian"
                            message="Kind of! But it's more than that. We can have a lot of fun with this!"
                            time="2:06 PM"
                            delay={1300}
                        />
                    </div>
                </section>
                <div className="w-[600px] max-[669px]:w-full text-left p-2 m-4">
                    <h1 className="text-2xl font-bold p-2">
                        Why we opened this event?
                    </h1>
                    <p className="p-1">
                        Almost every students in PA fandom are about to enjoy{" "}
                        <span className="italic">SUMMER VACATION</span>!
                    </p>
                    <p className="p-1">
                        We wanted to do something to keep the fandom alive
                        during the vacation.
                    </p>
                    <p className="p-1">So, we decided to open this event!</p>
                </div>
            </div>

            <div className="w-full p-10 text-center font-goyang">
                <span className="font-extrabold italic text-4xl">
                    Imagin PA characters wearing your school uniform! How cool
                    is that?
                </span>
            </div>

            {/* 이벤트 내용 설명 */}
            <div className="w-full p-4 flex max-[669px]:flex-col justify-center items-start space-x-10 max-[860px]:space-x-4 max-[669px]:space-x-0">
                <div className="max-w-[700px] max-[669px]:w-full text-left p-2">
                    <h1 className="text-2xl font-bold p-2">
                        How can I join this event?
                    </h1>
                    <p className="p-1">It is very simple!</p>
                    <ol className="mt-3">
                        <ListElement numbering="1">
                            Draw PA characters wearing your school uniform.
                        </ListElement>
                        <ListElement numbering="2">
                            Post it on Twitter with
                            <HyperLink
                                href="https://twitter.com/hashtag/PASchoolDays"
                                text="#PASchoolDays"
                            />
                            hashtag.
                        </ListElement>
                        <ListElement numbering="3">
                            <div className="flex flex-wrap">
                                <span>Send your art to </span>
                                <div className="flex items-center space-x-1 ml-1">
                                    {twitterIcon}
                                    <HyperLink
                                        href="https://x.com/queso_gato1354"
                                        text="@queso_gato1354"
                                        className="text-black font-bold underline"
                                    />
                                </div>
                                <span> or </span>
                                <div className="flex items-center space-x-2 ml-1">
                                    {discordIcon}
                                    <span className="text-[#8095e2] font-bold underline">
                                        adrian09698
                                    </span>
                                </div>
                                <span> before deadline!</span>
                            </div>
                        </ListElement>
                    </ol>
                </div>
                <div className="max-w-[700px] max-[669px]:w-full text-left p-2">
                    <h1 className="text-2xl font-bold p-2 text-center">
                        The rules!
                    </h1>
                    <div className="text-center text-xl font-bold underline italic">
                        THE DEADLINE IS JULY 21ST!
                    </div>
                    <ul className="mt-3">
                        <RuleElement numbering="1" hoverColor={"#ff6b85"}>
                            At least one PA character should be in the art, and
                            that character should be wearing your school
                            uniform.
                            <br />*{" "}
                            <span className="italic text-gray-200 text-sm">
                                Your OC is also allowed to be in the art. It is
                                not mendatory.
                            </span>
                            <br />*{" "}
                            <span className="italic text-gray-200 text-sm">
                                PA and other fangame characters are also allowed
                                to be in the art.
                            </span>
                        </RuleElement>
                        <RuleElement numbering="2" hoverColor={"#aa98c7"}>
                            If you have no school uniform, you can wear them
                            whatever you want!
                        </RuleElement>
                        <RuleElement numbering="3" hoverColor={"#4b207e"}>
                            NO NSFW content is allowed.
                        </RuleElement>
                    </ul>
                </div>
            </div>

            {/* 담당자 소개 */}
            <div className="w-full bg-[#f57bcc] p-4 flex max-[669px]:flex-col justify-center items-start space-x-10 max-[860px]:space-x-4 max-[669px]:space-x-0">
                <div className="w-1/2 max-[669px]:w-full text-center p-2">
                    <h1 className="text-2xl font-bold p-2">
                        Who will manage this event?
                    </h1>
                    <div className="p-2 mt-2 grid grid-cols-3">
                        <div>
                            <div className="flex justify-center p-2">
                                <a
                                    href="https://x.com/queso_gato1354"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/profile/adrian_profile.jpg"
                                        alt="Adrian's Profile"
                                        className="rounded-full h-20 w-20 shadow-md hover:shadow-lg transition-all duration-300"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-xl">Adrian</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center p-2">
                                <a
                                    href="https://x.com/ice50067617"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/profile/ice_profile.jpg"
                                        alt="Ice's Profile"
                                        className="rounded-full h-20 w-20 shadow-md hover:shadow-lg transition-all duration-300"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-xl">Ice</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center p-2">
                                <a
                                    href="https://x.com/CorvusBlackONE"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/profile/90913_profile.jpg"
                                        alt="90913's Profile"
                                        className="rounded-full h-20 w-20 shadow-md hover:shadow-lg transition-all duration-300"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-xl">九十九一三</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 페이지 아래 여백 */}
            <div className="h-[200px]"></div>
        </div>
    );
}
