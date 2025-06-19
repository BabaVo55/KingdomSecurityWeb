import Image from "next/image";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import {icons} from '@/app/lib/data';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="flex h-screen w-screen p-3">
          {/* LEFT */}
          <div className="border w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] border-r-1 flex flex-col bg-gray-500">
            <Image src="/Large-logo-no-bg.png" alt="" width={200} height={200} className="border border-white" />            
            <Navbar data={icons} />
            
          </div>
          {/* RIGHT */}
          <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] border flex flex-col p-2 gap-4'>
            <Menu />
            {children}
          </div>
        </div>

  );
}
