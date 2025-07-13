"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
    name: string;
    time: string;
    url: string;
}
let recentWorks = [
    {
        name: "DAVAProject",
        time: "Jun-2025",
        url: "https://dava-theta.vercel.app/",
    },
    {
        name: "Homiey.edu ",
        time: "June-2024",
        url: "https://homiey.vercel.app/",
    },
    {
        name: "Coro Tashi     ",
        time: "Mar-2025",
        url: "https://coro-tashi.vercel.app/",
    },
];


recentWorks = Array.from({ length: 10 }, () => recentWorks).flat();

const Notification = ({ name, time, url }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            tabIndex={0}
            role="button"
            aria-label={`Open ${name}`}
            style={{ cursor: 'pointer' }}
        >
            <div className="flex flex-row items-center gap-3">

                <div className="flex flex-row items-center justify-end overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-black gap-x-7 ">
                        <span className="text-sm sm:text-lg text-opacity-80 text-[#EB5B00]">{name}</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
                className,
            )}
        >
            <AnimatedList>
                {recentWorks.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}
