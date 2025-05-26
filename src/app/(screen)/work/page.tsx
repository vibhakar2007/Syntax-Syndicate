import * as React from "react";
import { projects } from "@/lib/constants";
import { WorkCard } from "@/components/card/WorkCard";

function Work() {
  return (
    <div className="container min-h-extended mx-auto mt-12 border rounded-3xl p-4">
      <div className="pl-4">
        <h1 className="lg:text-4xl text-xl font-semibold">Project</h1>
        <p className="text-muted-foreground text-sm">
          A collection of my projects in web development, AI, and accessibility
        </p>
      </div>
      <div className="flex flex-wrap justify-center my-4 gap-4 w-full">
        {projects.map((project, i) => (
          <WorkCard project={project} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Work;
