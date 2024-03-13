import { Poppins } from 'next/font/google'
import "./globals.css";


const inter = Poppins({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "UdonSwap",
  description: "A DEX Where Your Assets Flow As Smoothly As Music",
  images: [
      {
        url: "https://gateway.lighthouse.storage/ipfs/QmQgtmCNXCgAywPcqofYKWAqU5Tb1YWYKtCYjLuio6uLgT", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      
    ],
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
