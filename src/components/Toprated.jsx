import React from 'react'
import IdeaCard from './IdeaCard';

const Toprated = async() => {
    const res = await fetch("https://idea-vault-webserver.vercel.app/allcollections");
    const data = await res.json();
    const selectedData = data.slice(0,6)
    console.log(selectedData)
  return (
    <div>
        <div className="text-center py-10">
  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
    Community Favorites
  </span>

  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
    Top Rated Ideas
  </h1>

  <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-5 md:px-0">
    Discover the most appreciated and highly rated ideas from the IdeaVault
    community. Explore innovative solutions that have inspired and impressed
    fellow innovators.
  </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-3'>
            {
                selectedData.map(data=><IdeaCard key={data._id} idea={data} />)
            }
        </div>
    </div>
  )
}

export default Toprated
