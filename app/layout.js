import { Poppins } from 'next/font/google'
import "./globals.css";

const inter = Poppins({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "UdonSwap",
  description: "A DEX Where Your Assets Flow As Smoothly As Music",
};

// const actayFont = {
//   fontFamily: 'Actay',
//   fontFile: '/font/Actay-Regular.otf',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
