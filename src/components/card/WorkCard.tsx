import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { projects } from "@/lib/constants";

export function WorkCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Card className="w-[350px]">
      <div>
        <CardHeader className="flex justify-between items-center ">
          <CardTitle>{project?.name}</CardTitle>
          <div className="text-xs bg-muted rounded-full px-3 py-[2px] font-semibold uppercase">
            {project?.status}
          </div>
        </CardHeader>
      </div>
      <CardContent>
        <CardDescription>{project?.desc}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project?.link && (
          <Link
            className="text-blue-500 text-sm font-semibold"
            href={project?.link}
          >
            Visit Project <span className="text-lg">→</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
