"use client";

import Link from "next/link";
import { LayoutList } from "lucide-react";

export default function AsideComponent() {
  return (
    <aside aria-label="Menu lateral">
      <Link className="block" href="/">
        <LayoutList size={24} />
        Feed
      </Link>
      <Link className="block" href="/favorites">
        Favoritos
      </Link>
      <Link className="block" href="/posts">
        Minhas Postagens
      </Link>
      <Link className="block" href="/perfil">
        Perfil
      </Link>
    </aside>
  );
}
