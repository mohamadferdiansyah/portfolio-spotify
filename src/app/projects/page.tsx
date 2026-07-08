import PlaylistPageTemplate, { PlaylistPageData } from "@/components/playlist/playlist-page-template";

const data: PlaylistPageData = {
  typeLabel: "Public playlist",
  title: "Projects",
  ownerName: "Mohamad Ferdiansyah",
  songCountLabel: "3 songs",
  coverUrl: "/covers/projects.png",
  gradientFrom: "#2a3f47",
  gradientTo: "#121212",
  rows: [
    {
      id: "prj-1",
      index: 1,
      title: "Villapuncak123",
      subtitle: "Personal project",
      badges: ["Laravel", "PHP", "+2"],
      rightText: "2024",
    },
    {
      id: "prj-2",
      index: 2,
      title: "DoDaily",
      subtitle: "Personal project",
      badges: ["Flutter", "Firebase"],
      rightText: "2024",
    },
    {
      id: "prj-3",
      index: 3,
      title: "MyMenu",
      subtitle: "Personal project",
      badges: ["Flutter", "Firebase"],
      rightText: "Still in development",
    },
  ],
};

export default function ProjectsPage() {
  return <PlaylistPageTemplate data={data} />;
}