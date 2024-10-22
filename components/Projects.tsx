import projects from "@/app/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-screen-xl px-9 xl:px-0">
        <h2 className="font-bold text-4xl px-4 pb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
