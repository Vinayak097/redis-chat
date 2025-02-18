import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) return redirect("/");

  return (
    <div className='flex h-screen w-full'>
      <div className='flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative justify-center items-center'>
        {/* Background Redis Logo - Adjusted position and opacity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
         
        </div>

        {/* Content Section - Improved stacking and spacing */}
        <div className='flex flex-col gap-8 px-6 max-w-[600px] text-center md:text-start relative z-10'>
          {/* Logo container with fixed dimensions */}
          <div className="relative w-[280px] h-[80px] mx-auto md:mx-0">
            <Image
              src={"/hero-right.png"}
              alt='RediStash Logo'
              fill
              className='object-contain select-none'
              priority
            />
          </div>
          
          <p className='text-2xl md:text-3xl text-balance text-white font-semibold'>
            The <span className='bg-red-500 px-2 font-bold'>ULTIMATE</span> chat app
          </p>
          <AuthButtons />
        </div>
      </div>

      {/* Right Side Hero Image - Adjusted container and image properties */}
      <div className='flex-1 relative hidden md:block bg-noise'>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <Image
            src={"/hero-right.png"}
            alt='Hero Image'
            fill
            className='object-contain dark:opacity-60 opacity-90 select-none'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;