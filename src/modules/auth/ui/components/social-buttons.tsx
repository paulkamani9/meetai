import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

interface SocialButtonsProps {
  isLoading: boolean;
}

const SocialButtons = ({ isLoading }: SocialButtonsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        disabled={isLoading}
        variant={"outline"}
        type="button"
        className="w-full"
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
          })
        }
      >
        <FaGoogle />
        Google
      </Button>
      <Button
        disabled={isLoading}
        variant={"outline"}
        type="button"
        className="w-full"
        onClick={() =>
          authClient.signIn.social({
            provider: "github",
          })
        }
      >
        <FaGithub /> GitHub
      </Button>
    </div>
  );
};

export default SocialButtons;
