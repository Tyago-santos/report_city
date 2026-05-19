import AsideComponent from "@/src/components/AsideComponent";
import ContentPost from "@/src/components/ContentPost";
import Header from "@/src/components/HeaderComponent";

export default function Home() {
  return (
    <div className="bg-[#f5f3fa]">
      <Header />
      <ContentPost />

      <AsideComponent />
    </div>
  );
}
