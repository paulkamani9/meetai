import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";
import { MeetingsGetOne } from "../../types";

interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingsGetOne;
}

export const UpdateMeetingDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateMeetingDialogProps) => {
  const router = useRouter();
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Update meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        initialValues={initialValues}
        onCancel={() => onOpenChange(false)}
        onSuccess={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
