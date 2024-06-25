import Link from 'next/link';
import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <div className=" py-9 lg:h-[11rem] md:h-[35rem] h-[31rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

            <div className="w-full md:text-2xl text-xs lg:text-3xl  flex justify-around text-gray-300 text-wrap relative z-20">
                <div className="flex ">
                    <div className="lg:text-xl">
                        <p className="text-xl">Follow Me</p>
                        <p className="text-wrap font-normal text-sm">
                            Get to know aboute me ,<br />
                            by following me on my <br />social Media profile,<br />
                            Thank  you.
                        </p>
                    </div>
                </div>
                <div className="">
                    <p>Quick Links</p>
                    <ul className="text-sm font-normal flex flex-col">
                        <Link href={"/about"}>About Me</Link>
                        <Link href={"/projects"}>Projects</Link>
                        <Link href={"/skills"}>Skills</Link>
                        <Link href={"/contact"}>Contact Me.</Link>
                    </ul>
                </div>
                <div className="">
                    <p className="text-xl font-bold">Social Accounts</p>
                    <ul className="flex ml-4">
                        <Link href={"https://github.com/AniketRatan27"} className='ml-4'><FaGithub /></Link>
                        <Link href={"https://www.linkedin.com/in/aniket-ratan-49b62b221/"} className='ml-4'><CiLinkedin /></Link>
                        <Link href={"https://x.com/ani_ket_27"} className='ml-4'><CiTwitter /></Link>
                    </ul>
                </div>
            </div>

            <div className="h-full w-auto  bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                <div className='  text-center text-gray-300 text-wrap relative z-20'>
                    <p className="text-xs mt-3 text-gray-300 font-normal">&#169; Aniket Ratan, All rights reserved.</p>
                </div>
            </div>
        </div>

    )
}

export default Footer