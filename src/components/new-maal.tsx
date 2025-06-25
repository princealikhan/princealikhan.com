import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedList } from "./magicui/animated-list";
import { Marquee } from "./magicui/marquee";
import { AnimatedListDemo } from "./animated-deml";
import { DotPattern } from "./magicui/dot-pattern";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: "BellIcon",
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),

  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    // background: (
    //   <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    // ),
    background: (
        
        <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg  p-20">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Dot Pattern
        </p>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
      </div>     ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      "Calendar"
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}



// import {
//     BellIcon,
//     CalendarIcon,
//     FileTextIcon,
//     GlobeIcon,
//     InputIcon,
//   } from "@radix-ui/react-icons";
  
//   import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
  
//   const features = [
//     {
//       Icon: FileTextIcon,
//       name: "Save your files",
//       description: "We automatically save your files as you type.",
//       href: "/",
//       cta: "Learn more",
//       background: <img className="absolute -right-20 -top-20 opacity-60" />,
//       className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
//     },
//     {
//       Icon: InputIcon,
//       name: "Full text search",
//       description: "Search through all your files in one place.",
//       href: "/",
//       cta: "Learn more",
//       background: <img className="absolute -right-20 -top-20 opacity-60" />,
//       className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
//     },
//     {
//       Icon: GlobeIcon,
//       name: "Multilingual",
//       description: "Supports 100+ languages and counting.",
//       href: "/",
//       cta: "Learn more",
//       background: <img className="absolute -right-20 -top-20 opacity-60" />,
//       className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
//     },
//     {
//       Icon: CalendarIcon,
//       name: "Calendar",
//       description: "Use the calendar to filter your files by date.",
//       href: "/",
//       cta: "Learn more",
//       background: <img className="absolute -right-20 -top-20 opacity-60" />,
//       className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//     },
//     {
//       Icon: BellIcon,
//       name: "Notifications",
//       description:
//         "Get notified when someone shares a file or mentions you in a comment.",
//       href: "/",
//       cta: "Learn more",
//       background: <img className="absolute -right-20 -top-20 opacity-60" />,
//       className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
//     },
//   ];
  
//   export async function BentoDemo() {
//     return (
//       <BentoGrid className="lg:grid-rows-3">
//         {features.map((feature) => (
//           <BentoCard key={feature.name} {...feature} />
//         ))}
//       </BentoGrid>
//     );
//   }
  