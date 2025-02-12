"use client"
import React, { useEffect, useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'
import { cn } from '@/lib/utils'
import Sidebar from '../Sidebar'
import MessageContainer from './MessageContainer'

interface ChatLayoutProps {
    defaultLayout:number[]|undefined
}
const ChatLayout = ({defaultLayout=[320,480]}:ChatLayoutProps) => {
    const [isMobile,setIsMobile]=useState<boolean>();
    const [collapse,setCollapsed]=useState<boolean>(false)
    useEffect(()=>{
        const checkScreenWidth=()=>{

            setIsMobile(window.innerWidth<=768)
        }
    })
  return (
    <ResizablePanelGroup 
    direction='horizontal'
    className='h-full items-stretch bg-background rounded-lg'
    onLayout={(sizes:number[])=>{
        document.cookie=`react-resizable-panels:layout=${JSON.stringify(sizes)}`
    }}

    >
        <ResizablePanel defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile?0:24}
        maxSize={isMobile?8:30}
        onCollapse={()=>{
            setCollapsed(true)
            document.cookie=`react-resizable-panels:layout=${JSON.stringify(defaultLayout)}`
        }}
        onExpand={()=>{
            setCollapsed(false)
            document.cookie=`react-resizable-panels:layout=${JSON.stringify(defaultLayout)}`
        }}
        className={cn(collapse && "min-w-[80px] transition-all duration-300 ease-in-out")}
        ><Sidebar isCollapsed={collapse}></Sidebar>
        </ResizablePanel>

        <ResizableHandle withHandle></ResizableHandle>

        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        {/* <div className='flex justify-center items-center h-full w-full px-10'>
						<div className='flex flex-col justify-center items-center gap-4'>
							<img src='/logo.png' alt='Logo' className='w-full md:w-2/3 lg:w-1/2' />
							<p className='text-muted-foreground text-center'>Click on a chat to view the messages</p>
						</div>
			</div> */}
            <MessageContainer>
                
            </MessageContainer>
            

        </ResizablePanel>
        

    </ResizablePanelGroup>
    
        
    
  )
}

export default ChatLayout