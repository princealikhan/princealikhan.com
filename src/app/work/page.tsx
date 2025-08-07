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
import { BLUR_FADE_DELAY } from "@/lib/utils";


export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-12 sm:py-24 px-6 min-h-[100dvh] space-y-10">
      {/* <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve built multiple startups single-handedly, from concept to launch.
              From AI-powered sales automation platforms (WarpAI) to educational technology solutions (Edumob E-learning),
              I love turning ideas into scalable products. Each project represents a journey
              of learning, growth, and innovation in the world of technology and entrepreneurship.
            </p>
          </div>
        </div>
      </BlurFade> */}



      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
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
      </section> */}
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Startup Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  From idea to execution
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My entrepreneurial journey spans over 8+ years, from co-founding Edumob E-learning
                  in 2014 to building WarpAI in 2025. Each startup has taught me valuable lessons
                  about product development, market validation, and scaling technology solutions.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.work.filter(job => job.badges.some(badge => badge === "Founder" || badge === "Co-Founder")).map((startup, id) => (
                <BlurFade
                  key={startup.title + startup.company}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={`${startup.title} at ${startup.company}`}
                    description={startup.highlight.message}
                    location={startup.location}
                    dates={`${startup.start}${'end' in startup && startup.end ? ` - ${startup.end}` : ' - Present'}`}
                    image={startup.logoUrl}
                    links={[]}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
