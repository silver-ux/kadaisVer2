import Link from "next/link";
import { Header } from "./components/Header";


export default function Home() {

  const sites = ["kadai1", "kadai2", "kadai3", "kadai4"];

  return (
  <>
    <Header />
    <div className="home-container">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        {sites.map((site) => (
          <Link href={`/${site}`} className="hover:bg-red-100 transition-all border border-black duration-300 rounded-lg bg-red-50 block p-6" key={site}>
            <h5 className="text-red-500 font-bold border-b border-solid border-black text-2xl">{site}</h5>
            <p className="text-base md:text-lg pt-4 ">完成品はこちら。</p>
          </Link>
        ))}
      </div>
    </div >
  </>
  );
}
