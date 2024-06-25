import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaJava, FaReact } from 'react-icons/fa';
import { SiReactquery } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";

const testimonials = [
    {
        name: "JAVA",
        title: "",
        imageIcon: <FaJava fontSize={40} />
    },
    {
        name: "REACT-JS",
        title: "",
        imageIcon: <FaReact fontSize={40} />
    },
    {
        name: "TANSTACK-QUERY",
        title: "",
        imageIcon: <SiReactquery fontSize={40} />
    },
    {
        name: "MY-SQL",
        title: "",
        imageIcon: <GrMysql fontSize={40} />
    },
    {
        name: "NODE-JS",
        title: "",
        imageIcon: <FaNodeJs fontSize={40} />
    },
    {
        name: "CLOUD-COMPUTING",
        title: "",
        imageIcon: <FaAws fontSize={40} />
    },
    {
        name: "WEB-DEVELOPMENT",
        title: "",
        imageIcon: <FaHtml5 fontSize={40} />
    },
];


const TechSkillSection = () => {
    return (
        <div className="h-[36rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    )
}

export default TechSkillSection