import Image from "next/image";
import logo from "@/app/assets/BeatSwapLogo.png"
import navStyle from "@/app/navbar.module.css"
import Link from "next/link";

export default function Navbar() {
    return(
      <div>
      <div className={navStyle.divtoflexlogoconnectwallet}>
        <div>
          <Link href="/">
            <Image
              className={navStyle.smartlogportal}
              src={logo}
              alt="not foundd"
            />
          </Link>
        </div>
        <div className={navStyle.connectwalletbuttondiv}>
        <button className={navStyle.navBtn}>LAUNCH APP</button>
         
        </div>
      </div>
    </div>

    )
}