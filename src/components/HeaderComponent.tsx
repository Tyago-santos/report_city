"use client";
import Link from "next/link";
import {
  HeartIcon,
  ImageIcon,
  LayoutList,
  MenuIcon,
  Search,
  User2Icon,
} from "lucide-react";
import { modalStore } from "../store/modalStore";

import ImagePerfil from "@/public/perfil.jpeg";
import Image from "next/image";

export default function Header() {
  const { toggleOpen, open } = modalStore();

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
      {/* mobile */}

      <header className="w-full ">
        <nav>
          {open && (
            <ul
              aria-label="Menu lateral mobile"
              role="complementary"
              className="md:hidden"
            >
              {menu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex gap-2 mb-5 font-semibold shadow-md p-4 hover:bg-accent 
                  hover:text-white rounded-sm"
                >
                  <item.icon className="text-primary" size={24} />
                  {item.name}
                </Link>
              ))}
            </ul>
          )}
        </nav>

        <nav className="max-w-5xl m-auto px-8 md:px-0  flex justify-between py-5 ">
          <button
            onClick={toggleOpen}
            aria-label="Abrir botão"
            className="flex gap-4 "
          >
            <MenuIcon className="w-6 h-6 text-primary md:hidden" />

            <span className="font-bold text-primary md:text-2xl ">
              Report City
            </span>
          </button>

          <Link className="md:hidden " href="/search">
            <Search className="w-6 h-6 text-text" />
          </Link>

          <div
            className="bg-black px-3 md:flex items-center bg-white shadow-md justify-between hidden 
            rounded-md w-100"
          >
            <input
              className="p-2 outline-none flex-1"
              placeholder="  Faça pesquisa"
              type="text"
            />
            <Search className="w-6 h-6 text-primary" />
          </div>

          <div>
            <Link
              className="w-10 relative h-10 rounded-full bg-white shadow-lg flex 
              items-center justify-center "
              href="/perfil"
            >
              <div className="absolute border-2 border-white bottom-0 right-0 w-3 h-3 bg-primary rounded-full"></div>
              <Image
                className="rounded-full w-10 h-10 object-cover"
                src={ImagePerfil}
                alt="Perfil"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
