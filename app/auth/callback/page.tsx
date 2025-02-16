"use client"
import { Loader } from 'lucide-react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { checkAuthStatus } from '@/actions/auth.actions'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = () => {
  const router = useRouter();
	const { data } = useQuery({
		queryKey: ["authCheck"],
		queryFn: async () => await checkAuthStatus(),
	});

  useEffect(() => {
    if (data?.success) {
      router.push("/");
    }
  }, [data?.success, router]);

  return (
    <div className='mt-20 w-full flex justify-center'>
    <div className='flex flex-col items-center gap-2'>
      <Loader className='w-10 h-10 animate-spin text-muted-foreground' />
      <h3 className='text-xl font-bold'>Redirecting...</h3>

      <p>Please wait</p>
    </div>
  </div>
  )
}

export default page