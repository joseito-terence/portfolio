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
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-full h-auto rounded-xl p-6 border">
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
          />
        </CardItem>
        
        <CardItem translateZ={50}>
					<div className="text-sm my-3 flex flex-wrap gap-2 text-white dark:text-white/70">
            {project.tags.map((tag, index) => (
              <span key={index} className="border border-white/50 px-2 py-1 rounded-xl">
                {tag}
              </span>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            View
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
