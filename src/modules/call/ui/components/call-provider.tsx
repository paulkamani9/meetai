"use client";

import { authClient } from "@/lib/auth-client";
import { LoaderIcon } from "lucide-react";
import { CallConnect } from "./call-connect";
import { generatedAvatarUri } from "@/lib/avatar";

export const CallProvider = ({
  meetingId,
  meetingName,
}: {
  meetingId: string;
  meetingName: string;
}) => {
  const { data, isPending } = authClient.useSession();

  if (!data || isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar">
        <LoaderIcon className="size-6 animate-spin text-white" />
      </div>
    );
  }

  return (
    <CallConnect
      meetingId={meetingId}
      meetingName={meetingName}
      userId={data.user.id}
      userImage={
        data.user.image ??
        generatedAvatarUri({ seed: data.user.name, variant: "initials" })()
      }
      userName={data.user.name}
    />
  );
};
