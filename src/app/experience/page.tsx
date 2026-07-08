// app/experience/page.tsx
import PlaylistPageTemplate, { PlaylistPageData } from "@/components/playlist/playlist-page-template";
import { getWorkExperiences } from "@/lib/supabase/queries";

function formatMonthYear(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDateRange(startDate: string, endDate: string | null, isCurrent: boolean) {
  const start = formatMonthYear(startDate);
  const end = isCurrent ? "Present" : endDate ? formatMonthYear(endDate) : "-";
  return `${start} - ${end}`;
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperiences();

  const data: PlaylistPageData = {
    typeLabel: "Public playlist",
    title: "Experience",
    ownerName: "Mohamad Ferdiansyah",
    songCountLabel: `${experiences.length} songs`,
    coverUrl: "/covers/experience.png",
    gradientFrom: "#4a1f28",
    gradientTo: "#121212",
    rows: experiences.length
      ? experiences.map((exp, i) => ({
        id: exp.id,
        index: i + 1,
        title: exp.role_name,
        subtitle: exp.company_name,
        badges: exp.skills_tools ?? [],
        rightText: formatDateRange(exp.start_date, exp.end_date, exp.is_current),
      }))
      : [
        {
          id: "exp-empty",
          index: 1,
          title: "No work experience yet",
          subtitle: "Need a job TT",
          rightText: "Present",
        },
      ],
  };

  return <PlaylistPageTemplate data={data} />;
}