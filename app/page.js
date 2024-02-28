import Image from "next/image";
import logo from "@/app/assets/BeatSwapLogo.png"
import main from "@/app/main.module.css"
import token from "@/public/token.png"
import flower from "@/public/flower.png"
import Navbar from "./navbar";
import titleImg from "@/public/Subtract.png"
import union from "@/public/union.png"
import star from "@/public/star.png"

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className={main.titleMain}><Image src={titleImg} alt="image1" className={main.navImg1}/>
      <div className={main.navtitlemain}>
      <div className={main.title}>A DEX Where Your Assets </div>
      <div  className={main.title}>Flow As Smoothly As </div>
      <div  className={`${main["title"]} ${main["titleflex"]} `}>Music <Image src={star} alt="star"/>
      </div>
      </div>
      </div>
     
      <div className={main.homeMain2}>
    <div className={main.tokenBox}><Image src={token} alt="logo" className={main.tokenImg}/> </div>
    <div >
    <Image src={union} alt="image1" className={main.navImg2}/>
    <div className={main.navtitlemain}>
      <div className={main.pera}>Experience Seamless Trading, Instant Liquidity, Unmatched Security, Experience the Future of Decentralized Finance. </div>
     
   </div>
   
    </div>
    
      </div> 
      <div style={{display:"flex", justifyContent:"flex-end"}}><Image src={flower} alt="logo" className={main.flower}/></div>
      
  <div className={main.footer}>Copyright BeatSwap @2024</div>
    </main>
  );
}
