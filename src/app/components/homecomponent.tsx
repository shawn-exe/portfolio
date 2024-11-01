"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import { BorderBeam } from '../../components/ui/border-beam';
import myIcon from '../../../public/images/Myicon.png'
export function Homecomponent() {
  const pdfUrl = '/data/Resume/resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-16">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center lg:text-left leading-tight">
              <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br className="hidden sm:block" />
              <TypeAnimation
                sequence={[
                  "Shawn",
                  1000,
                  "Engineer",
                  1000,
                  "Developer",
                  1000,
                  "Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block mt-2 sm:mt-4"
              />
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl max-w-2xl text-center lg:text-left">
              I&apos;m a Computer Science and Engineering student with a passion for development. 
              I look forward to contributing to impactful projects and building innovative solutions!
            </p>

            <div className="flex flex-row justify-center sm:justify-start">
            <div className="mr-2">
              <Link
                href="/contact"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Hire Me
                </span>
              </Link>
            </div>
            <div className="ml-2">
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-slate-800 text-white mt-3"
              >
                <span onClick={handleDownload} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Tilt tiltReverse={true} className="w-full max-w-[300px] lg:max-w-[400px]">
              <div className="relative aspect-square rounded-full bg-[#181818] overflow-hidden">
                <Image
                  src={myIcon}
                  alt="myicon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
                <BorderBeam 
                  size={300} 
                  borderWidth={3.5}
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
