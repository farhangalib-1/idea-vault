import React from 'react'
import {Button, Chip, Form} from "@heroui/react";
import {Description, Label, TextArea, TextField} from "@heroui/react";
import Image from 'next/image';

const page = async({ params }) => {
    const {Id} = await params;
    const res = await fetch(`https://idea-vault-webserver.vercel.app/allcollections/${Id}`);
    const data = await res.json();
   

    
  return (
    <div>
      <div className='border p-5 rounded-lg shadow-md bg-white/30 backdrop-blur-xl w-11/12  md:w-5/12 mx-auto my-10'>
        <Image src={data.imageURL} alt={data.ideaTitle} width={800} height={400} className='rounded-lg object-cover mb-4 w-full' />
        <Chip color="accent">{data.category}</Chip>
        <h1 className='text-4xl font-bold'>{data.ideaTitle}</h1>
        <p className='text-gray-600 my-1.5'>{data.detailedDescription}</p>
        {
            data.tags.map((tag, index) => <Chip key={index} className='mr-4' color="primary">{tag}</Chip>)
        }
        <div className="flex gap-3 mt-4">
            <div className="border p-4 rounded-lg">
        <p className='text-gray-600 my-1.5'> <span className='font-bold font-black'>Target Audience: </span>{data.targetAudience}</p>
        <p className='text-gray-600 my-1.5'> <span className='font-bold font-black'>Estimated Budget: $</span>{data.estimatedBudget}</p>
        </div>
        <div className="border p-4 rounded-lg">
        <p className='text-gray-600 my-1.5'> <span className='font-bold'>Problem Statement: </span>{data.problemStatement}</p>
        <p className='text-gray-600 my-1.5'> <span className='font-bold'>Proposed Solution: </span>{data.proposedSolution}</p>
        </div>
        </div>
      </div>
      <div className='border p-5 rounded-lg shadow-md bg-white/30 backdrop-blur-xl w-11/12  md:w-5/12 mx-auto my-10'>
        <h1 className='text-2xl font-bold mb-4'>Comments</h1>
        <Form >
         <TextField className="w-full" name="message">
      <Label>your comment</Label>
      <TextArea placeholder="Write your comment here..." rows={4} />
      <Description>Maximum 500 characters</Description>
    </TextField>
    <Button type='submit'  className="mt-4" color="primary">
      Post Comment
    </Button>
    </Form> 
      </div>
    </div>
  )
}

export default page
