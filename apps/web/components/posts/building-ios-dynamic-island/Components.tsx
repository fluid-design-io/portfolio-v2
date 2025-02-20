import { cn } from "@workspace/ui/lib/utils";

export const Wallpaper = () => {
  return (
    <>
      <div
        style={{
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at center, rgba(210,21,217,0.8) 0%, rgba(243,146,247,0.3) 50%)",
        }}
        className="absolute inset-x-[-50%] top-[-45%] mix-blend-hard-light"
      />
      <div
        style={{
          width: "300%",
          height: "200%",
          background:
            "radial-gradient(circle at center, rgba(9,2,46,0.2) 0%, rgba(197,104,212,0.25) 30%)",
        }}
        className="absolute inset-x-[-100%] bottom-[-130%] mix-blend-hard-light"
      />
      <div
        className="absolute inset-0"
        style={{
          WebkitMask:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 70%)",
        }}
      >
        <div
          style={{
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle at center, rgba(31,2,72,0.9) 0%, rgba(210,21,217,0) 50%)",
          }}
          className="absolute -inset-x-1/2 bottom-[-100%] mix-blend-multiply"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(0deg, rgba(9,2,46,.5) 0%, rgba(167,74,192,0.25) 100%)",
        }}
        className="absolute -inset-x-0 bottom-0 mix-blend-color-screen"
      />
    </>
  );
};

export const Antannas = () => {
  const antannaBandClassName = cn("bg-[#68566E] absolute z-20");
  return (
    <>
      {/* Left */}
      <div
        className={cn(antannaBandClassName, "h-2 top-[4.5rem] -left-0.5 w-0.5")}
      />
      {/* Top */}
      <div
        className={cn(
          antannaBandClassName,
          "h-0.5 right-[4.5rem] -top-0.5 w-2",
        )}
      />
      {/* Right */}
      <div
        className={cn(
          antannaBandClassName,
          "h-2 top-[4.5rem] -right-0.5 w-0.5",
        )}
      />
    </>
  );
};

export const Buttons = () => {
  const buttonClassName = cn("absolute w-0.5");
  const buttonGradient =
    "linear-gradient(0deg, rgba(205,201,205,1) 0%, rgba(42,35,53,1) 8%, rgba(84,77,95,1) 16%, rgba(121,112,132,1) 50%, rgba(84,77,95,1) 88%, rgba(42,35,53,1) 92%, rgba(205,201,205,1) 100%)";
  return (
    <>
      <div
        className={cn(buttonClassName, "-left-1 top-[8.25rem] h-6")}
        style={{ background: buttonGradient }}
      />
      <div
        className={cn(buttonClassName, "-left-1 top-[12rem] h-14")}
        style={{ background: buttonGradient }}
      />
      <div
        className={cn(buttonClassName, "-left-1 top-[16.5rem] h-14")}
        style={{ background: buttonGradient }}
      />
      <div
        className={cn(buttonClassName, "-right-1 top-[14.125rem] h-24")}
        style={{ background: buttonGradient }}
      />
    </>
  );
};

export const Speaker = () => {
  return (
    <div
      className={cn(
        "absolute w-16 top-1 h-0.5 bg-zinc-200/5 inset-x-0 mx-auto",
        "rounded-b-full border-[0.5px] border-t-0 border-white/5",
      )}
    >
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,rgba(0, 0, 0, 0.3) 0.5px,rgba(0, 0, 0, 0) 0)",
          backgroundSize: "2px 2px",
        }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export const Camera = () => {
  return (
    <div className="absolute h-7 w-7 flex justify-center items-center top-[1px] right-0 rounded-full">
      <div className="relative h-6 w-6">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent rounded-full"></div>
        <div className="absolute inset-0.5 bg-zinc-900 rounded-full"></div>
        <div className="absolute inset-1 rounded-full bg-stone-800"></div>
        <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-neutral-800 to-zinc-900"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-700 via-black to-blue-900"></div>
        <div className="absolute rounded-full bg-white w-0.5 h-0.5 blur-[1px] left-[9.5px] top-[9px]" />
        <div className="absolute rounded-full bg-blue-200/50 w-0.5 h-0.5 blur-[1px] left-[11.5px] bottom-[8.5px]" />
      </div>
    </div>
  );
};
