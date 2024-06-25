"use client";

import React from 'react'
import { BackgroundBeams } from "./ui/background-beams";
import Link from 'next/link';


const Contact = () => {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <h1 className="absolute top-3 md:text-3xl text-3xl text-neutral-300 font-bold lg:text-7xl">Contact Me.</h1>
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Join Me.
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    {`Welcome, Feel free to reach out to me for any inquiries, collaborations, or opportunities in the realm of frontend development.
                        Looking to enhance your website's user experience or design? Contact me to see how we can work together to create engaging frontend solutions.`}
                </p>
                <Link href="mailto:ratan.aniket09@gmail.com">
                    <input
                        type="button"
                        value="Mail Here."
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                    />
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    )
}

export default Contact