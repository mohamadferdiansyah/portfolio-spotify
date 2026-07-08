"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Home, Search, Inbox } from "lucide-react";

export default function Topbar() {
    const router = useRouter();

    return (
        <header className="flex h-full w-full items-center bg-black px-2">
            {/* left */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => router.back()}
                    className="grid h-8 w-8 place-items-center rounded-full bg-[#121212] hover:bg-[#1f1f1f]"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => router.forward()}
                    className="grid h-8 w-8 place-items-center rounded-full bg-[#121212] hover:bg-[#1f1f1f]"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* center (fixed width, not full) */}
            <div className="mx-auto flex w-full max-w-[640px] items-center gap-2">
                <Link
                    href="/"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#1f1f1f] hover:bg-[#2a2a2a]"
                >
                    <Home size={20} />
                </Link>

                <div className="flex h-12 min-w-0 flex-1 items-center rounded-full bg-[#1f1f1f] px-4">
                    <Search className="text-[#b3b3b3]" size={18} />
                    <input
                        placeholder="What do you want to play?"
                        className="ml-3 h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-[#b3b3b3]"
                    />
                    <div className="mx-3 h-6 w-px bg-white/20" />
                    <Inbox className="text-[#b3b3b3]" size={18} />
                </div>
            </div>

            {/* right */}
            <div className="flex items-center gap-3">
                <button className="hidden text-sm font-semibold md:block">Contact me</button>
                <Link href="/about" className="h-10 w-10 overflow-hidden rounded-full bg-[#2a2a2a]">
                    <img src="/avatar.jpg" alt="avatar" className="h-full w-full object-cover" />
                </Link>
            </div>
        </header>
    );
}