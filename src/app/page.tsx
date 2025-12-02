import AppCard from "@/components/custom/AppCard";
import IntroCard from "@/components/custom/IntroCard";
import { apps } from "@/data/apps";
export default function Home() {
  console.log(apps);
  return (
    <div className="fle w-full h-full items-center justify-center bg-zinc-200 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <IntroCard />
        <div className="flex flex-col">
          {apps.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
       </div>
       
    </div>
  );
}
