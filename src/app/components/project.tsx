"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { GithubIcon } from "./Icons";

interface ProjectProps {
  name: string;
  description: string;
  tasks: string;
  url: string;
  img: string;
  tags: string[];
}

export function Project({ project }: { project: ProjectProps }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-300 relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-6 font-mono ">
        <CardItem
          translateZ="50"
          className="text-xl text-neutral-900 dark:text-white"
        >
          {project.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-900 text-sm max-w-sm mt-2 dark:text-neutral-300 font-popsans"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.img}
            height="1000"
            width="1000"
            className="h-full w-full object-fit rounded-xl group-hover/card:shadow-xl"
            alt={project.name}
          />
        </CardItem>
        
        <CardItem
          translateZ="40"
          className="flex flex-wrap gap-2 mt-4"
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs"
            >
              {tag}
            </span>
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={project.url}
            target="_blank"
            className="px-4 py-2 flex gap-2 items-center rounded-xl text-xs font-semibold dark:text-white"
          >
            View Project <GithubIcon/>
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={project.url}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
