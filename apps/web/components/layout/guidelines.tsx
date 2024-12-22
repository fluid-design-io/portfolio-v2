import { cn } from "@workspace/ui/lib/utils";

function Guidelines() {
  return (
    <div className='fixed inset-0 flex justify-center px-6 sm:px-8'>
      <div
        className={cn(
          "flex w-full max-w-7xl",
          "pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] lg:pl-[calc(env(safe-area-inset-left)+2rem)] lg:pr-[calc(env(safe-area-inset-right)+2rem)]"
        )}
      >
        <div
          className={cn(
            "w-full ring-1 ring-border",
            "contrast-more:ring-zinc-400"
          )}
        />
      </div>
    </div>
  );
}

export default Guidelines;
