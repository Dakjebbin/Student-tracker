import React from 'react'
import { Dashboard } from './Dashboard'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const page = async () => {
  const {userId} = await auth()

  if (!userId) {
    redirect("/")
  }

  const user = await clerkClient()

 const clerk = await user.users.getUser(userId)
 
 const plainUser = {
  id: clerk.id,
  firstName: clerk.firstName,
  lastName: clerk.lastName,
  email: clerk.emailAddresses[0]?.emailAddress,
  imageUrl: clerk.imageUrl,
}; 

  return (
    <div><Dashboard clerk={plainUser}/></div>
  )
}

export default page