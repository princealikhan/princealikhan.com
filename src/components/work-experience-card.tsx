"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface WorkExperienceProps {
  logoUrl: string;
  altText: string;
  title: string;
  company?: string;
  location?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  descriptions?: string[];
  highlight?: any;
}
export const WorkExperience = ({
  logoUrl,
  altText,
  title,
  company,
  location,
  href,
  badges,
  period,
  descriptions,
  highlight,
}: WorkExperienceProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (descriptions) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <span className="ml-2">
                  {badges && (
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </span>
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {company && (
              <div className="font-sans text-xs font-medium">
                {company}, {location}
              </div>
            )}
          </CardHeader>
          {descriptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              <ul className="list-disc">
                {descriptions.map((description, index) => (
                  <li
                    className="ml-2 font-sans text-xs text-muted-foreground mb-1"
                    key={index}
                  >
                    {description}
                  </li>
                ))}
              </ul>

              {highlight && (
                <div
                  className="mt-4 flex items-center p-3 mb-3 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                  role="alert"
                >
                  <div className="font-sans text-xs">
                    <span className="font-medium">{highlight?.type} </span>
                    {highlight?.message}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
