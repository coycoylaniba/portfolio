import {
  SiAwsamplify,
  SiAwslambda,
  SiCss3,
  SiElectron,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { createFileRoute } from "@tanstack/react-router";

import { Section } from "~/components/section";
import { Skill } from "~/components/skill";
import { Work } from "~/components/work";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <main className="flex max-h-screen snap-y snap-mandatory flex-col overflow-y-auto">
        <Section className="items-center justify-center">
          <span className="lg:max-w-1/2 text-center">Hi! I'm Coycoy.</span>
        </Section>

        <Section className="" theme="dark">
          <span>AboutMe_</span>

          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <span className="text-center lg:max-w-1/2">
              I'm a full stack developer committed in writing efficient and
              easy-to-maintain code. I primarily use Next.js for web, Electron +
              React for desktop applications, and React Native for mobile
              applications.
            </span>

            {/* <span className="lg:max-w-1/2 text-center">---</span>

            <span className="lg:max-w-1/2 text-center">
              "If you don't have any shadows, you are not in the light."
            </span> */}
          </div>
        </Section>

        <Section className="">
          <span>Education_</span>

          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-center">BS Computer Science</span>
              <span className="text-center font-bold">
                Bohol Island State University - Calape Campus
              </span>
              <span className="text-center text-xs opacity-70">
                Jun 2015 - Mar 2019
              </span>
            </div>
          </div>
        </Section>

        <Section className="" theme="dark">
          <span>Experience_</span>

          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-center">Full Stack Developer</span>
              <span className="text-center font-bold">
                Skyride Mobile Web App Solutions Company
              </span>
              <span className="text-center text-xs opacity-70">
                Jan 2020 - Present
              </span>
            </div>

            <span className="text-center">---</span>

            <div className="flex flex-col gap-1">
              <span className="text-center">Full Stack Developer</span>
              <span className="text-center font-bold">
                Employee of a Senior Developer
              </span>
              <span className="text-center text-xs opacity-70">
                Mar 2019 - Oct 2019
              </span>
            </div>

            <span className="text-center">---</span>

            <div className="flex flex-col gap-1">
              <span className="text-center">Former OJT</span>
              <span className="text-center font-bold">
                Skyride Mobile Web App Solutions Company
              </span>
              <span className="text-center text-xs opacity-70">
                Apr 2018 - May 2018
              </span>
            </div>
          </div>
        </Section>

        <Section className="">
          <span>Skills_</span>

          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="grid grid-cols-4 gap-8 lg:max-w-1/2">
              <Skill icon={SiJavascript} text="JavaScript" />

              <Skill icon={SiTypescript} text="TypeScript" />

              <Skill icon={SiCss3} text="CSS" />

              <Skill icon={SiHtml5} text="HTML" />

              <Skill icon={SiTailwindcss} text="Tailwind CSS" />

              <Skill icon={SiNodedotjs} text="Node.js" />

              <Skill icon={SiReact} text="React" />

              <Skill icon={SiReact} text="React Native" />

              <Skill icon={SiNextdotjs} text="Next.js" />

              <Skill icon={SiElectron} text="Electron" />

              <Skill icon={SiMysql} text="MySQL" />

              <Skill icon={SiPostgresql} text="PostgreSQL" />

              <Skill icon={SiSqlite} text="SQLite" />

              <Skill icon={SiFirebase} text="Firebase" />

              <Skill icon={SiAwsamplify} text="AWS Amplify" />

              <Skill icon={SiAwslambda} text="AWS Lambda" />
            </div>
          </div>
        </Section>

        <Section className="" theme="dark">
          <span>Projects_</span>

          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="grid w-full max-w-3/4 grid-cols-2 gap-8 lg:max-w-1/2 lg:grid-cols-4">
              <Work
                href="https://www.beholdbohol.com/"
                name="Behold Bohol"
                description="Tourism App"
              />

              <Work
                href="https://www.cttp.org.ph/"
                name="CTTP"
                description="Church"
              />

              <Work
                href="https://www.navisyogroup.com/"
                name="Navisyo"
                description="Boat Rental"
              />

              <Work
                href="https://www.theoctopusclub.com/"
                name="The Octopus Club"
                description="E-Commerce"
              />

              <Work
                href="https://darnaexpress.com/"
                name="Darna Express"
                description="Package Management & Tracking"
              />

              <Work
                href="https://visualdreaming.com.au/"
                name="Visual Dreaming"
                description="Wellness App"
              />

              <Work
                href="https://play.google.com/store/apps/details?id=net.conceptmobile.storm&hl=en"
                name="Storm App"
                description="Weather App"
              />

              <Work
                href="https://nexus-odm.com/"
                name="Nexus ODM"
                description="Influencer App"
              />
            </div>
          </div>
        </Section>

        <Section className="">
          <span>Contact_</span>

          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <a href="mailto:coycoylaniba@gmail.com">coycoylaniba@gmail.com</a>

            <span>+63-910-669-8047</span>

            <div className="flex items-center gap-2">
              <a href="https://facebook.com/coycoylaniba/" target="_blank">
                facebook
              </a>

              <span>•</span>

              <a href="https://instagram.com/coycoylaniba/" target="_blank">
                instagram
              </a>

              <span>•</span>

              <a href="https://x.com/coycoylaniba/" target="_blank">
                x
              </a>

              <span>•</span>

              <a
                href="https://www.linkedin.com/in/coycoylaniba/"
                target="_blank"
              >
                linkedin
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
