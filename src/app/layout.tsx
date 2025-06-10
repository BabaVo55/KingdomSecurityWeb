import "./globals.css";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex border border-red-700 h-screen w-screen">
          {/* LEFT */}
          <div className="w-[10%] border flex flex-col items-center m-2">
            <Image src="/Large-logo-no-bg.png" alt="" width={200} height={200} />
            <Navbar />
          </div>
          {/* RIGHT */}
          <div className='border w-[90%] flex-col justify-between '>
            <Menu />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
