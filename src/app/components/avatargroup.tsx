"use client";
import React from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import {
    DiscordIcon,
    InstagramIcon,
    LeetCodeIcon,
    XIcon,
    LinkedInIcon,
    GithubIcon
  } from './Icons';
  
  const Links = [
    {
      id: 1,
      name: "Twitter",
      icon: XIcon,
      socialLink: "https://x.com/elonmusk"
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: LinkedInIcon,
      socialLink: "https://linkedin.com/in/shawnxsalis"
    },
    {
      id: 3,
      name: "GitHub",
      icon: GithubIcon,
      socialLink: "https://github.com/shawn-exe"
    },
    {
      id: 4,
      name: "Instagram",
      icon: InstagramIcon,
      socialLink: "https://www.instagram.com/zuck/"
    },
    {
      id: 5,
      name: "LeetCode",
      icon: LeetCodeIcon,
      socialLink: "https://www.leetcode.com/shawnxsalis"
    },
    {
      id: 6,
      name: "Discord",
      icon: DiscordIcon,
      socialLink: "https://discord.com/users/950326374084792320"
    }
  ];  

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={Links} />
    </div>
  );
}
