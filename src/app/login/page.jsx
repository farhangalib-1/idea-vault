"use client";
import {FloppyDisk} from "@gravity-ui/icons";
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
const page = () => {
     const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
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
            <Fieldset.Actions>
              <Button type="submit" className="w-full" variant="primary" color="brand">
                Login
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  )
}

export default page
