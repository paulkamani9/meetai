"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  return (
    <div>
      home-view
      <button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/sign-in"),
            },
          })
        }
      >
        go
      </button>
    </div>
  );
};
