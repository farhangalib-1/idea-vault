import OwnComment from '@/components/OwnComment';
import React from 'react'

const page = async() => {
    const res = await fetch("https://idea-vault-webserver.vercel.app/comments")
    const data = await res.json();
  return (
    <div>
        <div className="text-center py-10">
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
        <OwnComment data={data} />
    </div>
  )
}

export default page
