import React from "react";
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAstro,
  SiCypress,
  SiDocker,
  SiJavascript,
  SiJest,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOpensearch,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRuby,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

const TECHNOLOGIES = [
  {
    title: "Javascript",
    description:
      "Javascript is a programming language that conforms to the ECMAScript specification.",
    Icon: SiJavascript,
  },
  {
    title: "TypeScript",
    description: "TypeScript extends JavaScript by adding types.",
    Icon: SiTypescript,
  },
  {
    title: "Node.js",
    description:
      "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    Icon: SiNodedotjs,
  },
  {
    title: "Python",
    description:
      "Python is a clear and powerful object-oriented programming language.",
    Icon: SiPython,
  },
  {
    title: "Ruby",
    description:
      "A dynamic, open source programming language with a focus on simplicity and productivity.",
    Icon: SiRuby,
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    Icon: SiReact,
  },
  {
    title: "AWS",
    description:
      "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
    Icon: SiAmazonaws,
  },
  {
    title: "Terraform",
    description:
      "Terraform enables you to safely and predictably create, change, and improve infrastructure.",
    Icon: SiTerraform,
  },
  {
    title: "Linux",
    description:
      "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
    Icon: SiLinux,
  },
  {
    title: "Astro",
    description: "The fastest way to build modern websites with Astro.",
    Icon: SiAstro,
  },
  {
    title: "Next.js",
    description: "The React Framework for Production.",
    Icon: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    Icon: SiTailwindcss,
  },
  {
    title: "PostgreSQL",
    description: "The World's Most Advanced Open Source Relational.ase.",
    Icon: SiPostgresql,
  },
  {
    title: "Docker",
    description: "Empowering App Development for Developers.",
    Icon: SiDocker,
  },
  {
    title: "Jest",
    description: "Delightful JavaScript Testing.",
    Icon: SiJest,
  },
  {
    title: "Cypress",
    description:
      "Fast, easy and reliable testing for anything that runs in a browser.",
    Icon: SiCypress,
  },
  {
    title: "Opensearch",
    descriopion:
      "OpenSearch is the flexible, scalable, open-source way to build solutions for data-intensive applications.",
    Icon: SiOpensearch,
  },
  {
    title: "DynamoDB",
    description:
      "Amazon DynamoDB is a serverless, NoSQL, fully managed database service with single-digit millisecond response times at any scale, enabling you to develop and run modern applications while only paying for what you use.",
    Icon: SiAmazondynamodb,
  },
];

export const TechnologySection = () => {
  const toggleMoreInformation = (technology: (typeof TECHNOLOGIES)[number]) => {
    console.log(technology);
  };

  return (
    <section className="py-10 dark:bg-gray-300 bg-neutral-900">
      <h2 className="font-bold text-center transition-colors dark:text-orange-700 text-[2rem] text-zinc-50 md:text-[3rem]">
        Technologies
      </h2>
      <h3 className="text-lg text-center text-orange-600 transition-colors dark:text-gray-900">
        Some of the technologies I have worked with.
      </h3>
      <ul className="grid grid-cols-2 gap-4 py-9 mx-1 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 md:mx-[8rem]">
        {TECHNOLOGIES.map((technology) => (
          <li
            key={technology.title}
            className="rounded border transition-colors hover:bg-orange-300 bg-slate-100 border-neutral-600 dark:bg-neutral-900 dark:border-zinc-50 hover:dark:bg-orange-800"
          >
            <button
              onClick={() => toggleMoreInformation(technology)}
              className="p-2 w-full cursor-pointer mt-[.5rem]"
            >
              <div className="flex justify-center">
                {
                  <technology.Icon
                    title={technology.title}
                    className="text-4xl text-center transition-colors dark:text-zinc-50"
                  />
                }
              </div>
              <h3 className="font-bold transition-colors mt-[.5rem] text-md text-zinc-800 dark:text-zinc-100">
                {technology.title}
              </h3>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
