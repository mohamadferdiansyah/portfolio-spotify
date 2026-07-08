"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Library } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";
import { PLAYLISTS } from "@/lib/constants/playlists";

export default function SpotifySidebar() {
    const pathname = usePathname();
    const { sidebarCollapsed, toggleSidebar } = useUiStore();

    return (
        <aside
            className={cn(
                "hidden h-full shrink-0 rounded-xl bg-[#121212] p-2 lg:flex flex-col",
                "transition-all duration-300",
                sidebarCollapsed ? "w-[78px]" : "w-[260px]"
            )}
        >
            {/* Top section */}
            <div>
                {/* Library row = trigger collapse/expand */}
                <button
                    onClick={toggleSidebar}
                    className={cn(
                        "mb-3 flex w-full items-center rounded-md px-2 py-2 text-[#b3b3b3] hover:bg-white/10",
                        sidebarCollapsed ? "justify-center" : "justify-between"
                    )}
                    aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <div className={cn("flex items-center gap-2", sidebarCollapsed && "justify-center")}>
                        <Library size={20} />
                        {!sidebarCollapsed && <span className="font-semibold text-white">Your Library</span>}
                    </div>

                    {/* tanpa icon tambahan, cukup pakai tanda teks saat expanded */}
                    {!sidebarCollapsed && <span className="text-xs text-[#b3b3b3]">⟨⟩</span>}
                </button>

                {/* Playlist items */}
                <div className="space-y-2">
                    {PLAYLISTS.map((item) => {
                        const active = pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                title={item.title}
                                className={cn(
                                    "flex w-full items-center rounded-md transition-colors",
                                    sidebarCollapsed
                                        ? "justify-center p-2"
                                        : "gap-3 px-2 py-2",
                                    active ? "bg-white/10" : "hover:bg-white/5"
                                )}
                            >
                                <div
                                    className={cn(
                                        "shrink-0 overflow-hidden rounded-md bg-[#2a2a2a]",
                                        sidebarCollapsed ? "h-12 w-12" : "h-12 w-12"
                                    )}
                                >
                                    <img
                                        src={item.coverUrl}
                                        alt={item.title}
                                        className="h-full w-full object-cover object-center"
                                        draggable={false}
                                    />
                                </div>

                                {!sidebarCollapsed && (
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-white">{item.title}</p>
                                        <p className="truncate text-sm text-[#b3b3b3]">{item.subtitle}</p>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom language button (always bottom) */}
            <div className="mt-auto pt-3">
                <button
                    className={cn(
                        "border border-white/30 text-white hover:border-white",
                        sidebarCollapsed
                            ? "mx-auto grid h-10 w-10 place-items-center rounded-full"
                            : "flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
                    )}
                >
                    <Globe size={16} />
                    {!sidebarCollapsed && "English"}
                </button>
            </div>
        </aside>
    );
}