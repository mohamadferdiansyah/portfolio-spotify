import PlaylistPageTemplate, { PlaylistPageData } from "@/components/playlist/playlist-page-template";

const data: PlaylistPageData = {
  typeLabel: "Public playlist",
  title: "Skills",
  ownerName: "Mohamad Ferdiansyah",
  songCountLabel: "16 songs",
  coverUrl: "/covers/skills.png",
  gradientFrom: "#4d5a74",
  gradientTo: "#121212",
  rows: [
    { id: "sk-1", index: 1, title: "Laravel", rightText: "Intermediate" },
    { id: "sk-2", index: 2, title: "PHP", rightText: "Intermediate" },
    { id: "sk-3", index: 3, title: "JavaScript", rightText: "Beginner" },
    { id: "sk-4", index: 4, title: "HTML", rightText: "Intermediate" },
    { id: "sk-5", index: 5, title: "CSS", rightText: "Intermediate" },
    { id: "sk-6", index: 6, title: "Tailwind CSS", rightText: "Intermediate" },
    { id: "sk-7", index: 7, title: "Bootstrap", rightText: "Intermediate" },
    { id: "sk-8", index: 8, title: "Flutter", rightText: "Beginner" },
    { id: "sk-9", index: 9, title: "MySQL", rightText: "Intermediate" },
    { id: "sk-10", index: 10, title: "Firebase", rightText: "Beginner" },
    { id: "sk-11", index: 11, title: "PostgreSQL", rightText: "Beginner" },
    { id: "sk-12", index: 12, title: "Postman", rightText: "Beginner" },
    { id: "sk-13", index: 13, title: "GitHub", rightText: "Intermediate" },
    { id: "sk-14", index: 14, title: "Visual Studio Code", rightText: "Expert" },
    { id: "sk-15", index: 15, title: "Android Studio", rightText: "Beginner" },
    { id: "sk-16", index: 16, title: "Google Chrome", rightText: "Intermediate" },
  ],
};

export default function SkillsPage() {
  return <PlaylistPageTemplate data={data} />;
}