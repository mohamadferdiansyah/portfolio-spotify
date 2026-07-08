import Link from "next/link";
import { Play } from "lucide-react";
import { PLAYLISTS } from "@/lib/constants/playlists";
import SocialCards from "@/components/home/social-cards";
import { getSocialLinks } from "@/lib/supabase/queries";

export default async function HomePage() {
  let socialLinks = [];
  try {
    socialLinks = await getSocialLinks();
  } catch {
    socialLinks = [];
  }

  console.log("socialLinks", socialLinks);

  return (
    <section className="min-h-full rounded-xl bg-gradient-to-b from-[#3a1d1d] via-[#121212] to-[#121212] p-6">
      <SocialCards items={socialLinks}/>

      <h2 className="mt-10 text-5xl font-bold">Made for Mohamad Ferdiansyah</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {PLAYLISTS.map((p) => (
          <Link
            key={p.key}
            href={p.href}
            className="
        group relative rounded-lg p-2
        transition-all duration-300 ease-out
        hover:bg-white/10 hover:shadow-[0_8px_20px_rgba(0,0,0,0.28)]
      "
          >
            {/* cover */}
            <div className="relative aspect-square overflow-hidden rounded-md bg-[#2a2a2a]">
              <img
                src={p.coverUrl}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />

              {/* play button (lebih kecil) */}
              <span
                className="
            absolute bottom-2 right-2
            grid h-10 w-10 place-items-center rounded-full bg-[#1ED760] text-black shadow-lg
            opacity-0 translate-y-2 scale-95
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
          "
              >
                <Play className="h-4 w-4 fill-black" />
              </span>
            </div>

            {/* text (lebih kecil) */}
            <p className="mt-2 truncate text-lg font-bold leading-tight text-white">{p.title}</p>
            <p className="truncate text-sm text-[#b3b3b3]">{p.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}