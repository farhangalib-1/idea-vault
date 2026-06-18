"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import {TrashBin} from '@gravity-ui/icons';
import {PencilToSquare} from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
const CommentList = ({ comments }) => {
  const router = useRouter();
       const { data: session } = authClient.useSession()
       const user = session?.user || null;
       const email = user?.email || "abc@email.com"
       console.log(email)
         const handleDelete = async (id) => {
    await fetch(
      `https://idea-vault-webserver.vercel.app/comments/${id}`,
      {
        method: "DELETE",
      }
    );

    router.refresh();
  };

  return (
    <>
      {comments.map((comment) => (
       <div key={comment._id} className='border p-4 rounded-lg my-4 bg-gray-50 flex items-center gap-3'>
              <div className='flex items-center gap-3 mb-2'>
                <img src={comment.image} alt={comment.name} className='rounded-full w-10 h-10 object-cover' />
              </div>
              <div>
                 <h2 className='text-lg font-semibold'>{comment.name}</h2>
                <p className='text-gray-900'>{comment.message}</p>
                <p className='text-gray-400 text-[12px]'> {new Date(comment.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}</p>
    {
        comment.email === email && 
        (
        <>
        <Button className="mt-2 mr-3.5" variant="outline"
            onClick={() => handleEdit(comment._id)}
          >
            <PencilToSquare/>
            Edit
    </Button>
     <Button variant="danger-soft"
            onClick={() => handleDelete(comment._id)}
          >
            <TrashBin/>
            Delete
    </Button>
        </>
        )
    }
     
              </div>
     
    </div>
      ))}
    </>
  );
};

export default CommentList;