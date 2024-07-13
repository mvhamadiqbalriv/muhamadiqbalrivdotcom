import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Organization } from "@/components/organization";
import { Volunteer } from "@/components/volunteer";

export default function Home() {
  return (
    <div className="py-10 px-4">
      <Hero />
      <Experience />
      <Education />
      <Volunteer />
      <Organization />
      <Footer />
    </div>
  );
}
