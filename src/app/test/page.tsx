// "use client"

// import React from "react"
// import Link from "next/link"

// import Image from "next/image";
// import { useEffect, useState } from 'react'

// export default function home() {

// const [data, setData] = useState<any>(null);
// const [error, setError] = useState<string | null>(null);
// const [loading, setLoading] = useState(false)

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await fetch('/api/external')

//   //       if(!res.ok){
//   //         throw new Error(`HTTPS error! Status: ${res.status}`)
//   //       }

//   //       const json = await res.json()
//   //       setData(json);

//   //     } catch (error: any) {
//   //       console.error('Failed to fetch Api:', error)
//   //       setError(error.message || 'Something went wrong')
//   //     }
//   //   }

//   //   fetchData();

//   // }, [])

//   const fetchData = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const res = await fetch("/api/external")

//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`)
//       }

//       const json = await res.json()
//       setData(json)
//     } catch (error: any) {
//       console.error("Failed to fetch API:", error)
//       setError(error.message || "Something went wrong")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm 
//         dark:bg-gray-800 dark:border-gray-700
//         transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:rotate-[15deg] hover:rounded-[10px]
//         "
//       >
        
//           <div>
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             GITHUB
//           </h5>
//           </div>
        
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           {error ? (
//         <p className="text-red-500 mt-4">Error: {error}</p>
//       ) : data ? (
//         <div className="mt-4 text-black-500 font-bold">

//           <Image 
//           src={data.avatar_url} 
//           alt={`${data.login} avatar`} 
//           width={100} 
//           height={100} 
//           className="rounded-xl border"
//           />

//           <p>LogIN: {data.login}</p>
//           <p>User View Type: {data.user_view_type}</p>
//           <p>Name: {data.name}</p>
//           <p>Followers: {data.location}</p>
//           <p>Twitter Username: {data.twitter_username}</p>
//           <p>Followers: {data.followers}</p>
//           <p>Following: {data.following}</p>
//           {/* <p>Followers: {data.id}</p>
//           <p>Followers: {data.id}</p> */}

//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//         </p>
//         <button
//           onClick={fetchData}
//           // href="#"
//           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
//             bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
//             focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Click To Fetch GITHUB Data
//           <svg
//             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }
