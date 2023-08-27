import { Info } from "@/components/Info";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Info />
      <Projects />
      <Blog />
    </main>
  );
}
