import Image from "next/image";
import logo from "@/app/assets/BeatSwapLogo.png"
import main from "@/app/main.module.css"
import token from "@/public/token.png"
import flower from "@/public/flower.png"
import Navbar from "./navbar";
import titleImg from "@/public/Subtract.png"
import union from "@/public/Union.png"
import star from "@/public/star.png"

export default function Home() {
  return (
    <main className="">
      <Navbar/>

      <div class="box-container">
        <Image src={titleImg} alt="Box Image" className="img-div"/>
        <div class="text-overlay">
        A DEX Where Your Assets Flow As Smoothly As Music
        </div>
    </div>
    <div class="box-container2">
    <div className={main.tokenBox}>
      <Image src={token} alt="logo" className={main.tokenImg}/> 
      </div>
    <div style={{width:"70%",height:"33vh"}}>
      
        <Image src={union} alt="Box Image" className="img-div2"/>
      <div class="text-overlay2">
        Experience Seamless Trading, Instant Liquidity, Unmatched Security, Experience the Future of Decentralized Finance.
      </div>
      <div className={main.sec2Img}><Image src={flower} alt="logo" className={main.flower}/></div>
    </div>
    </div>
{/*      
      <div className={main.homeMain2}>
    <div className={main.tokenBox}><Image src={token} alt="logo" className={main.tokenImg}/> </div>
    <div >
    <Image src={union} alt="image1" className={main.navImg2}/>
    <div className={main.navtitlemain}>
      <div className={main.pera}>Experience Seamless Trading, Instant Liquidity, Unmatched Security, Experience the Future of Decentralized Finance. </div>
      <div style={{display:"flex", justifyContent:"flex-end"}}><Image src={flower} alt="logo" className={main.flower}/></div>
   </div>
   
    </div>
    
      </div>  */}
     
      
  <div className={main.footer}>Copyright BeatSwap @2024</div>
    </main>
  );
}
