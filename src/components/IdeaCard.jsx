import React from 'react'
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
const IdeaCard = ({ idea }) => {
  return (
    <div className='border p-5 rounded-lg shadow-md bg-white/30 backdrop-blur-xl'>
    <Image src={idea.imageURL} alt={idea.ideaTitle} width={400} height={200} className='rounded-lg object-cover mb-4 w-full' />
    <Chip color="accent">{idea.category}</Chip>
      <h3 className='text-xl font-bold'>{idea.ideaTitle}</h3>
      <p className='text-gray-600'>{idea.shortDescription}</p>
      <Link href={`/ideas/${idea._id}`}><Button variant='primary' color='brand' className='mt-4 w-full'>View Details</Button></Link>
    </div>
  )
}

export default IdeaCard
