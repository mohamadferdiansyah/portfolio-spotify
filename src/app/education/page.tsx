import PlaylistPageTemplate, { PlaylistPageData } from "@/components/playlist/playlist-page-template";

const data: PlaylistPageData = {
  typeLabel: "Public playlist",
  title: "Education",
  ownerName: "Mohamad Ferdiansyah",
  songCountLabel: "1 songs",
  coverUrl: "/covers/education.png",
  gradientFrom: "#62604f",
  gradientTo: "#121212",
  rows: [
    {
      id: "edu-1",
      index: 1,
      title: "SMK Wikrama Bogor",
      subtitle: "PPLG (Software Engineer Major)",
      rightText: "2023 - Present",
    },
  ],
};

export default function EducationPage() {
  return <PlaylistPageTemplate data={data} />;
}