"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import projects from "@/app/projects";

export function ProjectCard({
  project,
}: {
  project: typeof projects[0];
}) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-full h-auto rounded-xl p-6 border min-h-[470px]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="w-full object-cover aspect-video rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            unoptimized={project.image.includes("gif")}
          />
        </CardItem>

        <CardItem translateZ={50}>
          <div className="text-xs my-3 flex flex-wrap gap-1 text-white/90 mb-5">
            {project.tags.map((tag, index) => (
              <span key={index} className="border border-white/50 px-2 py-1 rounded-xl">
                {tag}
              </span>
            ))}
          </div>
        </CardItem>
        <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between items-center">
          {project.links.github &&
            <CardItem
              translateZ={20}
              as={Link}
              href={project.links.github}
              target="__blank"
              className="pr-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              GitHub →
            </CardItem>
          }
          <div className="flex-1 flex justify-end">
            {(project.links.site || project.links.github) &&
              <CardItem
                translateZ={20}
                as={Link}
                href={project.links.site || project.links.github}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                View
              </CardItem>
            }
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
