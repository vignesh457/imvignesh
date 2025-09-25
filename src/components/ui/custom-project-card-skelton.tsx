import comingSoon from "@/assets/coming-soon.svg";

export default function CustomProjectCardSkeleton() {
  return (
    <div className="h-[460px] w-[90%] p-6 md:w-[50%] flex flex-col rounded-xl overflow-hidden bg-neutral-950 gap-4 border border-neutral-800">
      
      {/* Image Skeleton */}
      <div className="relative w-full h-[40%] md:h-[60%] bg-neutral-800 rounded-md p-4">
        <span className="absolute top-2 right-2 z-10 px-3 py-1 text-sm rounded-md bg-neutral-950 text-neutral-400 border border-neutral-700">
          <div className="bg-orange-500 size-2 rounded-full relative mr-2 inline-block">
            <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping -z-10"></div>
          </div>
          building
        </span>
        <img src={comingSoon} alt="coming soon" className="w-full h-full object-fit" />
      </div>
      
      <div className="flex flex-col gap-4 h-[60%] md:h-[40%]">
        
        <div className="flex gap-4 mb-2">
          <div className="h-8 w-20 bg-neutral-800 rounded-md animate-pulse" />
        </div>

        <div className="h-20 bg-neutral-800 rounded-md animate-pulse" />

        <div className="my-auto h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-6 w-16 bg-neutral-800 rounded-md animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
