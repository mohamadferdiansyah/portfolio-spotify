"use client";

import { List, Play, Clock3 } from "lucide-react";

export type PlaylistRow = {
    id: string;
    index: number;
    title: string;
    subtitle?: string;
    imageUrl?: string;
    badges?: string[]; // sementara text badge dulu
    rightText?: string;
};

export type PlaylistPageData = {
    typeLabel: string; // "Public playlist"
    title: string;
    ownerName: string;
    songCountLabel: string; // "3 songs"
    coverUrl?: string;
    gradientFrom?: string; // ex "#24363f"
    gradientTo?: string; // ex "#121212"
    rows: PlaylistRow[];
};

type Props = {
    data: PlaylistPageData;
};

export default function PlaylistPageTemplate({ data }: Props) {
    return (
        <section
            className="min-h-full rounded-xl"
            style={{
                background: `linear-gradient(to bottom, ${data.gradientFrom ?? "#24363f"} 0%, ${data.gradientTo ?? "#121212"
                    } 42%, #121212 70%, #121212 100%)`,
            }}
        >
            {/* Header */}
            <div className="flex items-end gap-6 p-8">
                <div className="h-56 w-56 shrink-0 overflow-hidden rounded-md bg-[#2a2a2a] shadow-2xl">
                    {data.coverUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={data.coverUrl} alt={data.title} className="h-full w-full object-cover" />
                    ) : (
                        <div className="h-full w-full bg-[#2a2a2a]" />
                    )}
                </div>

                <div className="pb-2">
                    <p className="text-sm text-white/90">{data.typeLabel}</p>
                    <h1 className="mt-1 text-6xl font-extrabold tracking-tight md:text-7xl">{data.title}</h1>
                    <p className="mt-5 text-xl font-semibold">
                        {data.ownerName}
                        <span className="text-white/70"> • {data.songCountLabel}</span>
                    </p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-8 pb-4 pt-6">
                <div className="flex items-center gap-4">
                    <button className="grid h-14 w-14 place-items-center rounded-full bg-[#1ed760] text-black shadow-lg transition hover:scale-105">
                        <Play className="ml-0.5 h-7 w-7 fill-black" />
                    </button>
                    <button className="text-3xl text-white/70">…</button>
                </div>

                <button className="text-white/70">
                    <List className="h-7 w-7" />
                </button>
            </div>

            {/* Table Header */}
            <div className="px-8">
                <div className="grid grid-cols-[56px_minmax(260px,1fr)_minmax(120px,260px)] items-center border-b border-white/10 pb-3 text-sm text-[#b3b3b3]">
                    <span className="text-center">#</span>
                    <span>Title</span>
                    <span className="flex justify-end pr-2">
                        <Clock3 className="h-4 w-4" />
                    </span>
                </div>

                {/* Rows */}
                <div className="pb-10">
                    {data.rows.map((row) => (
                        <div
                            key={row.id}
                            className="grid grid-cols-[56px_minmax(260px,1fr)_minmax(120px,260px)] items-center rounded-md px-1 py-2 hover:bg-white/10"
                        >
                            <span className="text-center text-lg text-[#b3b3b3]">{row.index}</span>

                            <div className="flex items-center gap-4">
                                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-md bg-[#2a2a2a]">
                                    {row.imageUrl ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={row.imageUrl} alt={row.title} className="h-full w-full object-cover" />
                                    ) : null}
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-[28px] font-semibold leading-tight">{row.title}</p>
                                    {row.subtitle ? (
                                        <p className="truncate text-sm text-[#b3b3b3]">{row.subtitle}</p>
                                    ) : null}
                                </div>

                                {row.badges?.length ? (
                                    <div className="ml-3 hidden items-center gap-2 md:flex">
                                        {row.badges.map((badge, i) => (
                                            <span
                                                key={`${row.id}-badge-${i}`}
                                                className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/90"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                            </div>

                            <div className="truncate pr-2 text-right text-xl text-[#b3b3b3]">{row.rightText ?? "-"}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}