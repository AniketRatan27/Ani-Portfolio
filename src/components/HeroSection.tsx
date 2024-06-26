import DownloadResume from "./DownloadResume";
import { Spotlight } from "./ui/Spotlight";


const HeroSection = () => {



    return (
        <div className="h-auto md:h-[44rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">

                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Blending technical expertise and creativity to deliver exceptional results.
                </h1>

                <p
                    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >A dedicated front-end developer whose creative solutions consistently exceed expectations.
                </p>

                <div className="mt-4">

                    <button
                        className="bg-white rounded-md dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <DownloadResume />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default HeroSection