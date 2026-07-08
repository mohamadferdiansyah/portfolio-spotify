export default function AboutPage() {
    return (
        <section className="min-h-full rounded-xl bg-gradient-to-b from-[#1e2b42] via-[#121212] to-[#121212]">
            <div className="flex gap-6 p-8 items-end">
                <div className="h-64 w-64 rounded-full bg-[#2a2a2a]" />
                <div className="pb-4">
                    <p className="text-sm">Verified developer</p>
                    <h1 className="text-7xl font-extrabold">Mohamad Ferdiansyah</h1>
                    <p className="mt-3 text-lg text-white/90">1 Years of experience • SMK Wikrama Bogor</p>
                </div>
            </div>
            <div className="h-px bg-white/10" />
            <div className="p-8">
                <h2 className="text-4xl font-bold mb-6">About me</h2>
                <div className="space-y-4 text-xl text-[#d1d5db]">
                    <p>🚀 Junior Software Engineer 🚀</p>
                    <p>👨‍💻 A passionate student exploring the world of coding.</p>
                    <p>💼 Focused on front-end development and building impactful projects.</p>
                    <p>🔎 Always seeking new challenges and opportunities to grow.</p>
                </div>
            </div>
        </section>
    );
}