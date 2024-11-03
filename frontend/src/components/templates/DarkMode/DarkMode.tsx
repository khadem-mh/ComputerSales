"use client"
import { useState } from "react";
import { RiSunFoggyLine, RiMoonClearLine } from "react-icons/ri";

const DarkMode = () => {

    const [isLight, setIsLight] = useState<boolean>(true)

    return (
        <div onClick={() => setIsLight(prev => !prev)} className={`text-2xl rounded-md p-2 ${isLight ? "bg-yellow-300 text-black": "bg-slate-900 text-white" } cursor-pointer hover:opacity-75 transition-all duration-300`}>
            {
                isLight ? <RiSunFoggyLine /> : <RiMoonClearLine />
            }
        </div>
    )
}

export default DarkMode