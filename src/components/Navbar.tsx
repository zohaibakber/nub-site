"use client";
import { FloatingNav } from "@/components/ui/floating-nav";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
