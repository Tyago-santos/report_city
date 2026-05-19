"use client";
import Link from "next/link";
import WrapperPage from "./WrapperPage";
import { Landmark, MenuIcon, Search } from "lucide-react";
import { modalStore } from "../store/modalStore";

export default function Header() {
  const { toggleOpen } = modalStore();

  return (
    <>
      <header className="hidden">
        <nav>
          <WrapperPage>
            <Link href="/">
              <Landmark className="w-16 h-16 text-primary" />
            </Link>

            <ul>
              <li>
                <Link href="/perfil">Perfil</Link>
              </li>
              <li>
                <Link href="posts">Post</Link>
              </li>
              <li>
                <Link href="/favorites">Favoritos</Link>
              </li>
            </ul>
          </WrapperPage>
        </nav>
      </header>

      {/* mobile */}

      <header className="w-full ">
        <WrapperPage>
          <nav className="hidden">
            <button>
              <Landmark className="w-16 h-16 text-primary" />
            </button>

            <ul>
              <li>
                <Link href="/perfil">Perfil</Link>
              </li>
              <li>
                <Link href="posts">Post</Link>
              </li>
              <li>
                <Link href="/favorites">Favoritos</Link>
              </li>
            </ul>
          </nav>

          <nav className="flex  w-full justify-between py-5 ">
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
          </nav>
        </WrapperPage>
      </header>
    </>
  );
}
