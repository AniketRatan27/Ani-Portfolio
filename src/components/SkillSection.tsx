import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import React from 'react'
import gameHub from "../../public/assets/gameHub.png";
import twitter from "../../public/assets/twitterClone.png";
import movieApp from "../../public/assets/MovieProjectExample.png"
import Image from "next/image";

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Movie Application Design",
        description: "Built a Movie application frontend design.",
        header: <Image src={movieApp} alt="movie" />,
        links: "https://movies-app-seven-beryl.vercel.app/"

    },
    {
        title: "GameHub",
        header: <Image src={gameHub} alt="gameHub" />,
        description: "Built a GameHub website which is a mini example of RAWG website",
        links: "https://game-hub-git-main-aniketratan27.vercel.app/"

    },
    {
        title: "Chat Application",
        description: "Built a chat application where two or more user can chat.",
        header: <Skeleton />,
        links: "https://github.com/AniketRatan27/Chat-Application"

    },
    {
        title: "Twitter Clone",
        description: "Built a twitter clone, with some feature like auth,follow-unFollow posts.",
        header: <Image src={twitter} alt="Twitter" />,
        links: "https://twitter-clone-05wx.onrender.com"
    },
];



const SkillSection = () => {
    return (
        <div className="py-9 lg:h-[52rem] md:h-[52rem] h-[57rem] relative w-full flex items-center justify-center">
            <BentoGrid className="max-w-4xl sm:max-w-1xl  mx-auto w-full absolute lg:top-4 md:top-4 top-1 sm:m-3">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        links={item.links}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}


export default SkillSection