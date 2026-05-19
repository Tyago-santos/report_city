"use client";

import Link from "next/link";
import { LayoutList, HeartIcon, User2Icon, ImageIcon } from "lucide-react";

export default function AsideComponent() {
  const menu = [
    {
      name: "Feed",
      href: "/",
      icon: LayoutList,
      active: true,
    },

    {
      name: "Favoritos",
      href: "/favorites",
      icon: HeartIcon,
      active: false,
    },

    {
      name: "Minhas Postagens",
      href: "/posts",
      icon: ImageIcon,
      active: false,
    },
    {
      name: "Perfil",
      href: "/perfil",
      icon: User2Icon,
      active: false,
    },
  ];

  return (
    <>
      <aside
        className={`fixed top-25 left-30 md:block hidden`}
        aria-label="Menu lateral"
      >
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex gap-2 mb-5 font-semibold shadow-md hover:bg-primary hover:text-white p-4 rounded-sm ${item.active ? "bg-primary text-white" : "text-primary"}`}
          >
            <item.icon
              className={`text-primary  hover:text-secondary ${item.active ? "text-white" : ""} `}
              size={24}
            />
            {item.name}
          </Link>
        ))}
      </aside>
    </>
  );
}
