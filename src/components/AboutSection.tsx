import React from 'react'
import { SparklesCore } from './ui/sparkles'

const AboutSection = () => {
    return (

        <div className=" py-9 lg:h-[40rem] md:h-[35rem] h-[31rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className='absolute top-3 md:text-3xl text-3xl text-neutral-300 font-bold lg:text-7xl'>About Me</h1>
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={2}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className="flex gap-4 bg-black m-4 sm:text-xl lg:mt-16 tracking-wide absolute lg:top-16 ">
                <div className="h-full w-auto bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    <p className="md:text-2xl text-xs lg:text-3xl font-bold text-center text-gray-300 text-wrap relative z-20">
                        {`I am Aniket Ratan, a dedicated FullStack developer with a passion for creating dynamic and efficient web applications.  I have successfully completed several projects, including a Twitter clone and a chat application, showcasing my ability to tackle complex challenges and deliver high-quality solutions.`}<br /></p>
                </div>

                <div className="h-full w-auto bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    <p className='md:text-2xl text-xs lg:text-3xl font-bold text-center text-gray-300 text-wrap relative z-20'>
                        {`I thrive in collaborative environments and enjoy working on projects that push     the boundaries of what is possible.
                         My goal is to leverage my technical expertise and creative problem-solving skills to develop applications that provide meaningful value and enhance user experiences.`}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AboutSection