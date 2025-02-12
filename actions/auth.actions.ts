"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function checkAuthStatus(){
    const {getUser}=getKindeServerSession()
    const user = getUser()
    if(!user) return {success:false}
}