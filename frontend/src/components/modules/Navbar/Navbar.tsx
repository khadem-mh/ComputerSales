import Image from "next/image"
import DarkMode from "@templates/DarkMode/DarkMode";
//
import { FiSearch } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import { VscSignIn } from "react-icons/vsc";
import { BsBasket } from "react-icons/bs";

const Navbar = () => {

    return (
        <section className="container mt-4">

            <div className="flex items-center justify-between">

                <div className="">
                    <Image
                        src={"/images/logo/logo-main (2).webp"}
                        alt="logo"
                        width={150}
                        height={150}
                        priority
                    />
                </div>

                <div className="flex items-center shadow-xl px-4 py-3 rounded-lg">
                    <input
                        type="text"
                        placeholder="دنبال چی می گردی؟"
                        className="w-[20rem]"
                    />
                    <FiSearch className="text-2xl cursor-pointer rotate-45 hover:rotate-0 transition-all duration-300" />
                </div>

                <div className="flex items-center shadow-xl rounded-lg px-4 py-2">

                    <DarkMode />

                    <div className="flex items-center border rounded-lg overflow-hidden mx-3">
                        <div className="flex items-center p-2 cursor-pointer text-2xl hover:text-gray-500 hover:bg-slate-100 transition-all duration-300">
                            <LuUserPlus />
                        </div>
                        <div className="flex items-center p-2 cursor-pointer text-2xl hover:text-gray-500 hover:bg-slate-100 transition-all duration-300">
                            <VscSignIn />
                        </div>
                    </div>

                    <div className="relative text-2xl rounded-md p-2 cursor-pointer hover:text-gray-500 hover:bg-slate-100 transition-all duration-300 border">
                        <span className="absolute -top-[4px] -right-[4px] flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <BsBasket />
                    </div>

                </div>

            </div>

            <div></div>
        </section>
    )
}

export default Navbar