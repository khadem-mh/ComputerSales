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
                    <FiSearch className="text-2xl" />
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

                    <div className="text-2xl rounded-md p-2 cursor-pointer hover:text-gray-500 hover:bg-slate-100 transition-all duration-300 border">
                        <BsBasket />
                    </div>

                </div>

            </div>

            <div></div>
        </section>
    )
}

export default Navbar