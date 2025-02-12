import React from 'react'
import {USERS} from '@/app/db/dummy'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { usePreferences } from '@/app/store/usePreferences'
import useSound from 'use-sound'
import { LogOut } from 'lucide-react'
const Sidebar = ({isCollapsed}:{isCollapsed:boolean}) => {
    const [playClickSound] = useSound("/sounds/mouse-click.mp3");
	const { soundEnabled } = usePreferences();
	
    const selectedUser=USERS[0]
  return (
    <div  className='group relative flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-auto bg-background'>
        {isCollapsed&&(
            <div className='flex justify-between p-2 items-center'>
                <div className='flex gap-2 items-center text-2xl'>
                    <p className='font-medium'>Chats</p>

                </div>

            </div>
        )}
        <ScrollArea className='gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 '>
            {USERS.map((user,idx)=>(
                isCollapsed ? (
                    <TooltipProvider key={idx}>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <div>
                                <Avatar className='my-1 flex justify-center items-center'>
  <AvatarImage 
    src={user.image || "/user-placeholder.png"} 
    alt="User Image" 
    className='border-2 border-white rounded-full w-10 h-10'
  />
  <AvatarFallback>
    {user.name.charAt(0).toUpperCase()}
  </AvatarFallback>
</Avatar>

                                    <span className='sr-only'>{user.name}</span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side='right'
                            className='flex items-center gap-4'>                                
                            {user.name}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ) : (
                    <Button
							key={idx}
							variant={"grey"}
							size='x1'
							className={cn(
								"w-full justify-start gap-4 my-1",
								selectedUser?.email === user.email &&
									"dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink"
							)}
							onClick={() => {
								soundEnabled && playClickSound();
								
							}}
						>


<Avatar className='flex justify-center items-center'>
								<AvatarImage
									src={user.image || "/user-placeholder.png"}
									alt={"User image"}
									className='w-10 h-10'
								/>
								<AvatarFallback>{user.name[0]}</AvatarFallback>
							</Avatar>
							<div className='flex flex-col max-w-28'>
								<span>{user.name}</span>
							</div>
                    </Button>
                )
            
            ))}        </ScrollArea>
            <div className='mt-auto'>
				<div className='flex justify-between items-center gap-2 md:px-6 py-2'>
					{!isCollapsed && (
						<div className='hidden md:flex gap-2 items-center '>
							<Avatar className='flex justify-center items-center'>
								<AvatarImage
									src={"/user-placeholder.png"}
									alt='avatar'
									referrerPolicy='no-referrer'
									className='w-8 h-8 border-2 border-white rounded-full'
								/>
							</Avatar>
							<p className='font-bold'>jhon doe
								{/* {user?.given_name} {user?.family_name} */}
							</p>
						</div>
					)}
					<div className='flex'>
					
							<LogOut size={22} cursor={"pointer"} />
						
					</div>
				</div>
			</div>

        
    </div>
  )
}
export default Sidebar