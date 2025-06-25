import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { MarqueeDemo } from "@/components/tesxt";
import { CheckIcon } from "lucide-react";
import { BLUR_FADE_DELAY, classNames } from "@/lib/utils";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BentoDemo } from "@/components/new-maal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { WorkExperience } from "@/components/work-experience-card";
// import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-12 sm:py-24 px-6 min-h-[100dvh] space-y-10">
      <div className="mx-auto gap-6 grid grid-cols-1 items-center">
        <div className="space-y-10">
          <section id="hero">
            <div className="mx-auto w-full space-y-8">
              <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </div>
          </section>
          <section id="about">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
                {/* <PulsatingButton>
                    Hola
                </PulsatingButton> */}
            </BlurFade>
          </section>
          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Work Experience</h2>
              </BlurFade>
              {DATA.work.map((work:any, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <WorkExperience
                    key={id}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.title}
                    company={work.company}
                    location={work.location}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    descriptions={work.descriptions}
                    highlight={work.highlight}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
          <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-bold">Education</h2>
              </BlurFade>
              {DATA.education.map((education: any, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </div>

        <section id="featured-skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            {DATA.featuredSkills.map((featured, id) => (
              <React.Fragment key={id}>
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h3 className="text-l font-bold">{featured.category}</h3>
                </BlurFade>
                <div className="flex flex-col gap-3 mb-4">
                  {featured.list.map((item, key) => (
                    <BlurFade
                      key={key}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm mb-1">
                          {item.name}
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right mb-1">
                          {item.proficiency}%
                        </div>
                      </div>
                      <Progress value={item.proficiency} />
                    </BlurFade>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
