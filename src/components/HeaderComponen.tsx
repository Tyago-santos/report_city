import Link from "next/link";
import WrapperPage from "./WrapperPage";
import { Landmark, MenuIcon, Search } from "lucide-react";

export default function Header() {
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
          </nav>

          <nav className="flex  w-full justify-between py-5 ">
            <Link className="flex gap-4 " href="/">
              <MenuIcon className="w-6 h-6 text-primary md:hidden" />

              <span className="font-bold text-primary md:text-2xl ">
                Report City
              </span>
            </Link>

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
