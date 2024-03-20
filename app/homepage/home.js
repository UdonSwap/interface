'use client'
import Image from "next/image";
import main from "../homepage/home.module.scss";
import token from "@/public/homeToken.png";
import flower from "@/public/flower.png";
import Navbar from "../navbar/navbar";
import titleImg from "@/public/Subtract.png";
import union from "@/public/Union.png";
import star from "@/public/star.png";
import { useState,useEffect } from "react";
import React from "react";
import Lottie from 'lottie-react';
import animation from "@/animation.json"
import clip from '@/public/9.gif'
import bg from "@/public/bg.png";


export default function Homepage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000); // Example: Set loading to false after 3 seconds
      }, []);
  
  return (
    <React.Fragment>
    {loading ? (
        <div  className={main.loading}>
          <Lottie 
        animationData={animation} 
        loop={true}
        autoplay={true}
      style={{width:"300px",height:"300px"}}
        />
        </div>
      
    ) : (
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
              style={{ position: 'absolute' }}
            />
          </div>
        </div>

        <div className={main.boxContainer2}>
          <div className={main.tokenBox}>
            <Image src={clip} alt="logo" className={main.tokenImg} />
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
          <Image src={bg} alt="logo" className={main.flower} />
        </div>
      </main>
    )}
  </React.Fragment>
);
}