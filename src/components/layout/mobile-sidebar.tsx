"use client";

import Link from "next/link";
import { Menu, Home, Briefcase, Wrench, FolderKanban, GraduationCap, Share2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const menus = [
    { href: "/", label: "About", icon: Home },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/skills", label: "Skills", icon: Wrench },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/social", label: "Social", icon: Share2 },
];

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="secondary" className="md:hidden rounded-full bg-[#2a2a2a]">
                    <Menu className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] border-white/10 bg-[#121212] p-4">
                <div className="mb-4 text-white font-semibold">Your Portfolio</div>
                <nav className="space-y-1">
                    {menus.map((menu) => {
                        const Icon = menu.icon;
                        return (
                            <Link
                                key={menu.href}
                                href={menu.href}
                                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-[#B3B3B3] hover:bg-[#1f1f1f] hover:text-white"
                            >
                                <Icon className="h-4 w-4" />
                                {menu.label}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}