import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { WorkExperience } from "@/components/work-experience-card";

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
import { RainbowButton } from "@/components/magicui/rainbow-button";

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
                  {/* <SparklesText
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  /> */}
                  {/* <NumberTicker
                          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                          value={856} decimalPlaces={1}  /> */}

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
              <h2 className="mb-2 text-xl font-medium">About Me</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>

            {DATA.resume && (
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <a href={DATA.resume} download="cv">
                  <RainbowButton className="mt-4 h-10 px-4  text-sm">
                    Download Resume
                  </RainbowButton>
                </a>
              </BlurFade>
            )}
          </section>
  

          <section>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-xl font-medium">
                Check out my latest work
              </h2>
            </BlurFade>
           
            <section id="projects">
              <div className="space-y-12 w-full py-4">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mx-auto">
                  {DATA.projects.map((project: any, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            </section>
          </section>

          <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-medium">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <h2 className="text-xl font-medium">Work Experience</h2>
              </BlurFade>
              {DATA.work.map((work: any, id) => (
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
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-medium">Education</h2>
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
                    description={education.description}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* <ShineBorder
      className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
           <MarqueeDemo />

    </ShineBorder>
      <BentoDemo/>        */}
    </main>
  );
}
