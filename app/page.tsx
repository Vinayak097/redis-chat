import ChatLayout from "@/components/chat/ChatLayout";
import { Button } from "@/components/ui/button";
import PreferencesTab from "@/components/ui/PreferencesTab";
import Image from "next/image";
import { cookies } from "next/headers";
import { redis } from "@/lib/db";



export default async function Home() {
  const layout =  (await cookies()).get("react-resizable-panels:layout");
  const defaultLayout= layout? JSON.parse(layout.value):undefined
  await redis.set("foo" , "bar")
  return (
   <div className="flex h-screen flex-col items-center justify-center gap-4  p-4 md:px-24 md:py-32 ">
    <PreferencesTab/>
    <div
				className='absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000000] 
        ,#00091d_1px)] 
				dark:bg-[size:20px_20px] bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px]'
				aria-hidden='true'
			/>

			<div className='z-10 border rounded-lg max-w-5xl w-full min-h-[85vh] text-sm lg:flex'>
				<ChatLayout defaultLayout={defaultLayout} />
			</div>

   </div>
  );
}
