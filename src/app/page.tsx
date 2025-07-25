"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = authClient.useSession();

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: (ctx) => {
          window.alert("user created");
        },
        onError: (ctx) => {
          window.alert(ctx.error.message);
        },
      }
    );
  };

  if (session) {
    return (
      <div>
        <p>{session.user.name} is logged in</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }
  return (
    <div>
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="passsword"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>create user</Button>
    </div>
  );
}
