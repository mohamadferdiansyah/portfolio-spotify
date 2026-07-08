import { supabase } from "./client";

export async function getAboutProfile() {
    const { data, error } = await supabase
        .from("about_profile")
        .select("*")
        .limit(1)
        .maybeSingle();

    if (error) throw error;
    return data;
}

export async function getSocialLinks() {
    const { data, error } = await supabase
        .from("social_links")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
}

export async function getNowPlayingSong() {
    const { data, error } = await supabase
        .from("songs")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .limit(1)
        .maybeSingle();

    if (error) throw error;
    return data;
}

export async function getWorkExperiences() {
    const { data, error } = await supabase
        .from("work_experiences")
        .select("*")
        .order("display_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
}

export async function getProjects() {
    const { data, error } = await supabase
        .from("projects")
        .select("*, project_images(*)")
        .order("display_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
}

export async function getEducations() {
    const { data, error } = await supabase
        .from("educations")
        .select("*")
        .order("display_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
}

export async function getSkillsTools() {
    const { data, error } = await supabase
        .from("skills_tools")
        .select("*")
        .order("display_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
}