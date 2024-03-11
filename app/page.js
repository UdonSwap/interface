import Image from "next/image";
import main from "@/app/main.module.css";
import token from "@/public/homeToken.png";
import flower from "@/public/flower.png";
import Navbar from "./navbar/navbar";
import titleImg from "@/public/Subtract.png";
import union from "@/public/Union.png";
import star from "@/public/star.png";



export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className={main.homeMainDiv}>
      <Navbar />
      <div className={main.boxContainer}>
        <Image src={titleImg} alt="Box Image" className={main.imgdiv} />
        <div className={main.textOverlay}>
          A DEX Where Your Assets Flow As Smoothly As Music
          <Image
            src={star}
            alt="star"
            className={main.starimg}
            style={{ position: "absolute" }}
          />
        </div>


      </div>

      <div className={main.boxContainer2}>
        <div className={main.tokenBox}>
          <Image src={token} alt="logo" className={main.tokenImg} />
        </div>

        <div className={main.secdiv}>
          <div className={main.redimg}>
            <Image src={union} alt="Box Image" className={main.imgdiv2} />
          </div>
          <div className={main.textOverlay2}>
            Experience Seamless Trading, Instant Liquidity, Unmatched Security,
            Experience the Future of Decentralized Finance.
          </div>
        </div>
      </div>
      <div className={main.sec2Img}>
        <Image src={flower} alt="logo" className={main.flower} />
      </div>
      {/* <div className={main.footer}>Copyright © <span style={{color:"#e9e002"}}>UdonSwap</span> {currentYear}</div> */}
    </main>
  );
}
