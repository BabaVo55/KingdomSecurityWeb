import Image from "next/image";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="box-border p-2 flex h-screen w-screen">
          {/* LEFT */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] border-r-1 flex flex-col items-center">
            <Image src="/Large-logo-no-bg.png" alt="" width={200} height={200} />
            <Navbar />
          </div>
          {/* RIGHT */}
          <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] flex-col justify-between p-2'>
            <Menu />
            {children}
          </div>
        </div>

  );
}
