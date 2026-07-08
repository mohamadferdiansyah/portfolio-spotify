"use client";

import { Heart, ListMusic, Mic2, Pause, PictureInPicture2, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function NowPlayingBar() {
    return (
        <footer className="h-[88px] rounded-xl bg-black px-4">
            <div className="grid h-full grid-cols-3 items-center gap-4">
                {/* left */}
                <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-md bg-[#2a2a2a]" />
                    <div>
                        <p className="max-w-[140px] truncate text-sm font-semibold text-white">Sunflower (Spotify)</p>
                        <p className="text-sm text-[#b3b3b3]">Post Malone</p>
                    </div>
                    <Heart size={18} className="text-[#b3b3b3]" />
                </div>

                {/* center */}
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-2 flex items-center gap-4 text-[#b3b3b3]">
                        <Shuffle size={16} />
                        <SkipBack size={18} />
                        <button className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
                            <Pause size={18} />
                        </button>
                        <SkipForward size={18} />
                        <Repeat size={16} />
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <span className="text-xs text-[#b3b3b3]">0:00</span>
                        <Slider defaultValue={[30]} max={100} step={1} />
                        <span className="text-xs text-[#b3b3b3]">0:00</span>
                    </div>
                </div>

                {/* right */}
                <div className="ml-auto flex items-center gap-3 text-[#b3b3b3]">
                    <PictureInPicture2 size={16} />
                    <Mic2 size={16} />
                    <ListMusic size={16} />
                    <Volume2 size={16} />
                    <div className="w-24">
                        <Slider defaultValue={[70]} max={100} step={1} />
                    </div>
                </div>
            </div>
        </footer>
    );
}