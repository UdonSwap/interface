import Image from "next/image";
import logo from "../public/BeatSwapLogo.png";
import navStyle from "@/app/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={navStyle.divtoflexlogoconnectwallet}>
      <div className={navStyle.logoimg}>
        <Link href="/">
          <Image
            className={navStyle.smartlogportal}
            src={logo}
            alt="not foundd"
          />
        </Link>
      </div>

      <div className={navStyle.connectwalletbuttondiv}>
        <Link href="https://dex-interface-git-master-darshits-projects-b9e4d3eb.vercel.app/#/add/ETH">
          <button className={navStyle.navBtn}>LAUNCH APP</button>
        </Link>
      </div>
    </div>
  );
}
