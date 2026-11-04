import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="bg-background flex grow items-center justify-center">
      <Spinner className="text-muted-foreground size-6" />
    </div>
  );
}
