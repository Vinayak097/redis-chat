"use client"
import { USERS } from '@/app/db/dummy';
import React, { useEffect } from 'react'
import ChatTopBar from './ChatTopBar';
import MessageList from './MessageList';
import ChatBottomBar from './ChatBottomBar';
import { useSelectedUser } from '@/app/store/SeletedUser';

const MessageContainer = () => {
	const {setSelectedUser}=useSelectedUser();
	useEffect(()=>{
		const handleEscape=(e:KeyboardEvent)=>{
			if(e.key==="escape"){
				setSelectedUser(null);
			}
		}
		document.addEventListener("keydown" ,handleEscape)
		return ()=> document.removeEventListener("keydown",handleEscape)
	},[setSelectedUser])
    
  return (
    <div className='flex flex-col justify-between w-full h-full'>
			<ChatTopBar />

			<div className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
				<MessageList />
				<ChatBottomBar />
			</div>
		</div>
  )
}

export default MessageContainer