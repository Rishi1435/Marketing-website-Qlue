import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ModuleCarousel from "./ModuleCarousel";

export default function Modules() {
  return (
    <section id="modules" className="relative mx-auto max-w-content px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Five ways to practice"
          title="One app, five interview modules"
          subtitle="Each module runs a different kind of interview — pick the one that matches what you're preparing for."
        />
      </Reveal>
      <div className="mt-14">
        <ModuleCarousel />
      </div>
    </section>
  );
}
