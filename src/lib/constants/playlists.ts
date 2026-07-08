export type PlaylistItem = {
    key: "experience" | "projects" | "education" | "skills";
    title: string;
    subtitle: string;
    href: string;
    coverUrl: string;
};

export const PLAYLISTS: PlaylistItem[] = [
    {
        key: "experience",
        title: "Experience",
        subtitle: "Playlist • 1 songs",
        href: "/experience",
        coverUrl: "/covers/experience.png",
    },
    {
        key: "projects",
        title: "Projects",
        subtitle: "Playlist • 3 songs",
        href: "/projects",
        coverUrl: "/covers/projects.png",
    },
    {
        key: "education",
        title: "Education",
        subtitle: "Playlist • 1 songs",
        href: "/education",
        coverUrl: "/covers/education.png",
    },
    {
        key: "skills",
        title: "Skills",
        subtitle: "Playlist • 16 songs",
        href: "/skills",
        coverUrl: "/covers/skills.png",
    },
];