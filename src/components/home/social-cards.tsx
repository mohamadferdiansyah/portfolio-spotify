"use client";

import { Play } from "lucide-react";

type SocialItem = {
    id: string;
    platform_name: string;
    url: string;
    icon_url: string;
    bg_color: string;
};

// type SocialCardsProps = {
//     items: SocialItem[];
// };

export default function SocialCards({ items }: { items: SocialItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
                <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-14 items-center overflow-hidden rounded-md bg-white/20 transition-colors duration-300 hover:bg-white/30"
                >
                    {/* left icon */}
                    <div className={`grid h-full w-16 shrink-0 place-items-center`} style={{ backgroundColor: item.bg_color }}>
                        <img src={item.icon_url} alt={item.platform_name} className="h-10 w-10 object-contain" draggable={false} />
                    </div>

                    {/* label */}
                    <span className="ml-3 min-w-0 flex-1 truncate text-xl font-semibold text-white">
                        {item.platform_name}
                    </span>

                    {/* right play area (fix vertical center) */}
                    <div className="mr-3 flex h-full items-center">
                        <span
                            className="
                grid h-10 w-10 place-items-center rounded-full bg-[#1ED760] text-black shadow-lg
                opacity-0 translate-y-1 scale-95
                transition-all duration-300 ease-out
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
              "
                        >
                            <Play className="h-5 w-5 fill-black" />
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}