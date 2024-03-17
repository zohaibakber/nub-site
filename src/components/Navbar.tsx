"use client";
import { FloatingNav } from "@/components/ui/floating-nav";

export function FloatingNavbar() {
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
  const loginLink = "https://app.dispatchnub.com/auth/sign-in";
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} loginLink={loginLink} />
    </div>
  );
}
