import { ImportantEvents } from "./components/ImportantEvents";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Catalogue } from "@/components/Catalogue";

export const Home = () => {
  return (
    <section className="pt-16">
      <Banner />
      <ImportantEvents />
      <About/>
      <Services/>
      <Catalogue/>
    </section>
  );
};
