import Project from "./Project";
import projects from "../utils/data";

export default function Projects() {
  return (
    <div>
      <main>
        <div className="items-center justify-center text-black bg-white  px-3">
          <h1 className="mb-5">Selected work</h1>
          <div className="">
            <div className="grid grid-cols-1 items-center justify-center gap-3 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  thumbnail={project.thumbnail}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
