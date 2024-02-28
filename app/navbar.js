import Image from "next/image";
import logo from "@/app/assets/BeatSwapLogo.png"
import main from "@/app/main.module.css"
import Link from "next/link";

export default function Navbar() {
    return(
    <nav className="border-gray-200 dark:bg-gray-900" style={{width:"90%",margin:"0 auto"}}>
    <div className={`${main["navbar"]} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
    <Link href="https://flowbite.com/"  className="flex items-center space-x-3 rtl:space-x-reverse sm:w-200">
      <Image src={logo} className={main.logo} alt="Logo" /> 
    </Link>
  <div className={`${main["navbarBtn"]}  flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse`}>
      <button type="button" id={main.navbarBtn} className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">LAUNCH APP</button>
  </div>
  
  </div>
</nav>

    )
}