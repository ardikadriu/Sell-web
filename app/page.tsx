import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="bg-[#F3F3F3;]  w-screen flex items-center flex-col shrink-0">
      <Header />
      <Hero />
      <Main />
    </main>
  );
}
