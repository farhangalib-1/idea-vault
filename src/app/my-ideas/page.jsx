import React from 'react'
import MyIdea from "@/components/MyIdea"
const page = async() => {
    const res = await fetch("https://idea-vault-webserver.vercel.app/allcollections")
    const data = await res.json();
  return (
    <div>
        <div className="text-center py-10">
  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
    IdeaVault Dashboard
  </span>

  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
    My Submitted Ideas
  </h1>

  <p className="mt-4 text-gray-600 px-5 md:px-0 max-w-3xl mx-auto">
    Explore all the ideas you've contributed to the community. Edit,
    improve, and manage your submissions while tracking your journey as
    an innovator.
  </p>
        </div>
        
        <MyIdea data={data} />

    </div>
  )
}

export default page
