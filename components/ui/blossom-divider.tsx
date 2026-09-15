import { BlossomIcon } from "@/components/ui/icons";

export function BlossomDivider() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3 text-sakura">
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
      <BlossomIcon className="h-5 w-5" />
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
    </div>
  );
}
