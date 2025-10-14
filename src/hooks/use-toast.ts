// src/hooks/use-toast.ts
import { toast as sonnerToast } from "sonner";

export function toast({
  title,
  description,
  actionLabel,
  onAction,
  type = "default",
}: {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "default" | "success" | "error" | "info" | "warning";
}) {
  const action =
    actionLabel && onAction
      ? {
          label: actionLabel,
          onClick: onAction,
        }
      : undefined;

  switch (type) {
    case "success":
      sonnerToast.success(title, { description, action });
      break;
    case "error":
      sonnerToast.error(title, { description, action });
      break;
    case "info":
      sonnerToast.message(title, { description, action });
      break;
    case "warning":
      sonnerToast.warning(title, { description, action });
      break;
    default:
      sonnerToast(title, { description, action });
  }
}
