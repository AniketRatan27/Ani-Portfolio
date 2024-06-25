'use client';
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="AboutMe" />
                </Link>
                <Link href={"/projects"}>
                    <MenuItem setActive={setActive} active={active} item="Projects" />
                </Link>
                <Link href={"/skills"}>
                    <MenuItem setActive={setActive} active={active} item="Skills" />
                </Link>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact" />
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar