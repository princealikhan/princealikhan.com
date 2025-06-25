// "use client";

// import { cn } from "@/lib/utils";
// import { AnimatedList } from "@/components/magicui/animated-list";

// interface Item {
//   name: string;
//   description: string;
//   icon: string;
//   color: string;
//   time: string;
// }

// let notifications = [
//   {
//     name: "Payment received",
//     description: "Magic UI",
//     time: "15m ago",

//     icon: "💸",
//     color: "#00C9A7",
//   },

// ];

// notifications = Array.from({ length: 10 }, () => notifications).flat();

// const Notification = ({ name, description, icon, color, time }: Item) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
//         // animation styles
//         "transition-all duration-200 ease-in-out hover:scale-[103%]",
//         // light styles
//         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//         // dark styles
//         "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-10 items-center justify-center rounded-2xl"
//           style={{
//             backgroundColor: color,
//           }}
//         >
//           <span className="text-lg">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
        //   <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
        //     <span className="text-sm sm:text-lg">{name}</span>
        //     <span className="mx-1">·</span>
        //     <span className="text-xs text-gray-500">{time}</span>
        //   </figcaption>
//           <p className="text-sm font-normal dark:text-white/60">
//             {description}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };

// export function AnimatedListDemo({
//   className,
// }: {
//   className?: string;
// }) {
//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
//         className,
//       )}
//     >
//       <AnimatedList>
//         {notifications.map((item, idx) => (
//           <Notification {...item} key={idx} />
//         ))}
//       </AnimatedList>
//     </div>
//   );
// }

"use client";

import { BLUR_FADE_DELAY, cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import BlurFade from "./magicui/blur-fade";
import { ResumeCard } from "./resume-card";

interface Item {
  name: string;
  description: string;
  icon: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={
            {
              // backgroundColor: color,
            }
          }
        >
          {/* <span className="text-lg">{icon}</span> */}
          <Avatar className="size-12 m-auto ">
            <AvatarImage
              src={icon}
              alt={"altText"}
              className="object-contain"
            />
            <AvatarFallback>{"WORK"}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col overflow-hidden">
        <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  const notifications = Array.from({ length: 10 }, () => DATA.work).flat();

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {/* {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))} */}

        {/* {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    }, */}

        {notifications.map((work, idx) => (
          <Notification
            name={work.company}
            icon={work.logoUrl}
            description={work.title}
            key={idx}
          />
        ))}
      </AnimatedList>
    </div>
  );
}
