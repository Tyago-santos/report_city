"use client";

import AsideComponent from "@/src/components/AsideComponent";
import ContentPost from "@/src/components/ContentPost";
import Header from "@/src/components/HeaderComponent";
import { modalStore } from "@/src/store/modalStore";

export default function Home() {
  const { open } = modalStore();

  return (
    <div className="bg-[#f5f3fa]">
      <Header />
      <ContentPost />
      {open && <AsideComponent />}
    </div>
  );
}
