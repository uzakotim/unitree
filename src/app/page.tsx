import AppCard from "@/components/custom/AppCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fle w-full h-full items-center justify-center bg-zinc-200 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center p-10 md:p-20">
        <h2 className="font-bold text-5xl text-slate-800 mb-20">Apps for Unitree G1 robot</h2> 
        <AppCard />
       </div>
       
    </div>
  );
}
