import {Nav} from "../app/components/navbar"
import Footer from "./components/footer";
import { Homecomponent } from "./components/homecomponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav/>
      <Homecomponent/>
      <Footer/>
    </main>
  );
}
