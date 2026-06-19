"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
const OwnComment = ({data}) => {
      const { data: session } = authClient.useSession()
      const user = session?.user || null;
    const id = user?.id
    const ownComment = data.filter(el=>el.userId === id)
  return (
    <div>
        {
     ownComment.length === 0 && <div className="flex flex-col items-center justify-center text-center py-20 px-6">
    
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 mb-6">
      <span className="text-4xl">💬</span>
    </div>

    <h2 className="text-2xl font-bold text-gray-800">
      No Interactions Yet
    </h2>

    <p className="text-gray-500 mt-3 max-w-md">
      You haven't participated in any discussions yet. Start exploring ideas,
      share your thoughts, and engage with the IdeaVault community.
    </p>

    <Link
      href="/ideas"
      className="mt-6 px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
    >
      Explore Ideas
    </Link>
  </div> 
}
    {
        ownComment.length > 0 && <div className="text-center py-10">
  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
    Community Activity
  </span>

  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
    My Interactions
  </h1>

  <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-5 md:px-0">
    View all the comments and discussions you've contributed across ideas in the
    IdeaVault community.
  </p>
        </div>
    }
      {
        ownComment.map(el=>
        <div key={el._id} >
        <div className='w-11/12 mx-auto mb-5 border px-10 py-10 rounded-2xl'>
        <h1 className='font-bold'>{el.message}</h1>
         <p className="text-gray-400 text-[12px]">
                  {new Date(el.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
        </div>
        </div>)
      }
    </div>
  )
}

export default OwnComment
