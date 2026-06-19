import OwnComment from '@/components/OwnComment';
import React from 'react'

const page = async() => {
    const res = await fetch("https://idea-vault-webserver.vercel.app/comments")
    const data = await res.json();
    
  return (
    <div>
        
        <OwnComment data={data} />
    </div>
  )
}

export default page
