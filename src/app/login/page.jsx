"use client";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
const page = () => {
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
    email: userData.email,
    password: userData.password,
    rememberMe: true,
});
    if(error) {
        alert("Login failed: " + error.message);
        return;
    }
    else{
        alert("Login successful! Welcome back, " + data.user.name);
        redirect("/");
    }

  };
  return (
     <div className="flex items-center justify-center rounded-3xl bg-surface p-6">
      <Surface className="w-3/12 min-w-[380px] border border-white/20 bg-white/30 backdrop-blur-xl shadow-lg p-6 rounded-3xl">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend>Welcome Back to IdeaVault</Fieldset.Legend>
            <Description>Sign in to explore innovative ideas, share your own, and connect with a community of creators.</Description>
            <Fieldset.Group>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" variant="secondary" />
                <FieldError />
              </TextField>
                   <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
       
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <FieldError />
      </TextField>
            </Fieldset.Group>
            <Fieldset.Actions className="flex flex-col gap-3">
              <Button type="submit" className="w-full" variant="primary" color="brand">
                Login
              </Button>
              <Button type="submit" className="w-full" variant="outline" color="brand">
                <FcGoogle className="mr-2" />
                Sign in with Google
              </Button>
            </Fieldset.Actions>
          </Fieldset>
          <p className="text-center text-sm text-gray-600 mt-3">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="font-semibold text-sky-600 hover:text-sky-700 hover:underline"
  >
    Create one
  </Link>
</p>
        </Form>
      </Surface>
    </div>
  )
}

export default page
