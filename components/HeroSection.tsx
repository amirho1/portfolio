import Link from "next/link";
import React from "react";
import Socials from "./Socials";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="font-normal">Hello I am</span>{" "}
              <span className="block font-bold underline">Amir Hossein Salighedar.</span>
              <span className="block font-normal">Frontend Developer</span>
              <span className="block font-normal">Based In Iran.</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              I'm passionate web developer with 4 years of experience who is into learning and
              enjoying to share my knowledge, I"m master of Javascript and typescript. Experienced
              working with multiple frameworks such as{" "}
              <Link href="https://nextjs.org/" target="_blank" className="underline">
                Next.js
              </Link>{" "}
              Nest.js also have deep knowledge of underlining of javascript engine.
            </p>
          </div>

          <Socials />
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/Portfolio_pic.webp?height=640&width=480"
              alt="Amir Hossein Salighedar - Web Developer"
              width={480}
              height={640}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
