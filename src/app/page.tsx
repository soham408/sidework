"use client";

import Image from "next/image";
import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/external')

        if(!res.ok){
          throw new Error(`HTTPS error! Status: ${res.status}`)
        }

        const json = await res.json()
        setData(json);

      } catch (error: any) {
        console.error('Failed to fetch Api:', error)
        setError(error.message || 'Something went wrong')
      }
    }

    fetchData();

  }, [])

  return (
   <>
   <div className="flex items-center justify-center min-h-screen bg-gray-600 dark:bg-gray-500">
   <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto
   transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:rotate-[15deg] hover:rounded-[10px]


   ">
    <div className="">
    <h1 className="text-3xl font-bold">
      Git Hub!
    </h1>
    <Image
      className="rounded-lg"
      src="https://avatars.githubusercontent.com/u/141113437?s=96&v=4"
      alt="git hub avatar"
      width={120}
      height={37}
      priority
    />
    </div>

    <div>
      {/* <h1 className="font-bold underline">Github Details</h1> */}
      {error ? (
        <p className="text-red-500 mt-4">Error: {error}</p>
      ) : data ? (
        <div className="mt-4 text-black-500 font-bold">
          <p>LogIN: {data.login}</p>
          <p>User View Type: {data.user_view_type}</p>
          <p>Name: {data.name}</p>
          <p>Followers: {data.location}</p>
          <p>Twitter Username: {data.twitter_username}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          {/* <p>Followers: {data.id}</p>
          <p>Followers: {data.id}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>

   </div>
   </div>
   </>
  );
}
