import Link from "next/link";
import WrapperPage from "./WrapperPage";
import { Landmark, MenuIcon, Search } from "lucide-react";

export default function Header() {
  return (
    <WrapperPage>
      {/*  desktop*/}
      <>
        <header className="hidden">
          <nav>
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
        </header>

        {/* mobile */}

        <header className="w-full ">
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
            <Link className="flex gap-4" href="/">
              <MenuIcon className="w-6 h-6 text-primary" />

              <span className="font-bold text-primary ">Report City</span>
            </Link>

            <Link href="/search">
              <Search className="w-6 h-6 text-text" />
            </Link>
          </nav>
        </header>
      </>
    </WrapperPage>
  );
}
