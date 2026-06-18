"use client"
import { authClient } from "@/lib/auth-client";
import {Button, Form} from "@heroui/react";
import {Description, Label, TextArea, TextField} from "@heroui/react";
const CommentForm = ({ideaId}) => {
    const { data: session } = authClient.useSession()
      const user = session?.user || null;
      const name = user?.name || "Anonymous";
      const image = user?.image || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
     
      console.log(user);
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const commentData = Object.fromEntries(formData.entries());
     const userData ={
        ideaId,
        name,
        image,
        ...commentData,
        createdAt: new Date(),
      }
    const res = await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const data = await res.json();
    console.log(data);
    window.location.reload();
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
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
  )
}

export default CommentForm
