"use client";
import { authClient } from "@/lib/auth-client";
import {Button, Description, FieldError, Fieldset, Form, Input, Label, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
const page = () => {
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
    name: userData.name,
    email: userData.email, // required
    password: userData.password, // required
    image: userData.image,
});
console.log(userData);
console.log(data, error);
await authClient.signOut()
redirect("/login");
  };
  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-10 ">
     <Form className="flex w-96 flex-col gap-4 p-7 rounded-2xl backdrop-blur-xl shadow-lg " onSubmit={onSubmit}>
       <h1 className="text-xl font-bold">Join IdeaVault Today</h1>
        <Description>Create an account to share innovative ideas, discover new opportunities, and collaborate with a community of creators.</Description>
        <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="John Doe" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="image"
        type="text"
      >
        <Label>Profile Image URL</Label>
        <Input placeholder="https://example.com/image.jpg" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase letter</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          Sign Up
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      
    </Form>
    </div>
  )
}

export default page
