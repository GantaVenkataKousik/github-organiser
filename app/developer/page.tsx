"use client"
import Image from "next/image"
import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/stats-card"
import { ContributionCalendar } from "@/components/contribution-calendar"
import { ActivityChart } from "@/components/activity-chart"
import { LanguageChart } from "@/components/language-chart"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  LinkIcon,
  MapPin,
  Calendar,
  Star,
  GitFork,
  Users,
  Code,
  ExternalLink,
  Palette,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const mockLanguageData = [
  { name: "JavaScript", value: 40, color: "#f7df1e" },
  { name: "TypeScript", value: 25, color: "#3178c6" },
  { name: "Python", value: 15, color: "#3776ab" },
  { name: "HTML", value: 10, color: "#e34f26" },
  { name: "CSS", value: 10, color: "#1572b6" },
]

const mockActivityData = [
  { day: "Mon", commits: 5, prs: 1, issues: 2, contributions: 8 },
  { day: "Tue", commits: 7, prs: 0, issues: 1, contributions: 8 },
  { day: "Wed", commits: 3, prs: 2, issues: 0, contributions: 5 },
  { day: "Thu", commits: 9, prs: 1, issues: 3, contributions: 13 },
  { day: "Fri", commits: 4, prs: 0, issues: 1, contributions: 5 },
  { day: "Sat", commits: 2, prs: 0, issues: 0, contributions: 2 },
  { day: "Sun", commits: 1, prs: 0, issues: 0, contributions: 1 },
]

// Generate mock contribution calendar data
const generateMockContributionData = () => {
  const weeks = 52
  const days = 7
  const data = []

  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < days; d++) {
      const count = Math.floor(Math.random() * 10)
      let level: 0 | 1 | 2 | 3 | 4 = 0
      if (count > 0) level = 1
      if (count > 2) level = 2
      if (count > 5) level = 3
      if (count > 8) level = 4

      const date = new Date()
      date.setDate(date.getDate() - (weeks - w) * 7 - (days - d))

      week.push({
        date: date.toISOString().split("T")[0],
        count,
        level,
      })
    }
    data.push(week)
  }

  return data
}

const mockContributionData = generateMockContributionData()

// Mock skills data
const mockSkills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "SQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Docker", level: "Beginner" },
]

// Education data
const mockEducation = [
  {
    institution: "Vishnu Institute of Technology (Autonomous)",
    degree: "Bachelor of Technology - BTech, Computer Science",
    year: "2021 - 2025",
    description: "Grade: 9.06",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate Education (10+2)",
    year: "2018 - 2020",
    description: "Focused on Mathematics, Physics, and Chemistry.",
  },
  {
    institution: "Sri Chaitanya School",
    degree: "Secondary School Education",
    year: "2017 - 2018",
    description: "Completed with distinction.",
  },
]

// Experience data
const mockExperience = [
  {
    company: "ChatFin CA, US - Remote",
    position: "Software Developer Intern",
    year: "Mar 2025 - Present",
    description:
      "Designed and implemented interfaces based on client requirements. Developed features for web applications and contributed to building an AI tool for financial requirements. Optimized UI components and API integrations to enhance responsiveness, scalability, and overall system efficiency.",
  },
  {
    company: "Wellytics Thub, Hyderabad, Telangana - Hybrid",
    position: "Full Stack Developer Intern",
    year: "Apr 2024 - Mar 2025",
    description:
      "Designed and developed interfaces using Vue.js for dashboard, messaging, patient and calendars tabs. Built an audio transcription tool for live audio generation and utilized ApexCharts for data visualization. Developed a pedigree tool for patient family trees and ensured responsive web design for seamless user experience.",
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    year: "2020 - Present",
    description:
      "Worked with 15+ startups building their end-to-end products. Responsibilities include designing, developing web and mobile applications, deploying them, and maintaining them throughout their lifecycle. Expertise in delivering complete solutions from concept to deployment.",
  }
]

// Mock projects data
const mockProjects = [
  {
    name: "GitHub Organizer",
    description: "A comprehensive GitHub profile analytics and organization tool",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/GantaVenkataKousik/github-organizer",
  },
  {
    name: "AI Image Generator",
    description: "An AI-powered image generation tool using DALL-E API",
    technologies: ["Python", "Flask", "React", "OpenAI API"],
    link: "https://github.com/GantaVenkataKousik/ai-image-generator",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/GantaVenkataKousik/portfolio-website",
  },
  {
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with payment integration",
    technologies: ["MERN Stack", "Redux", "Stripe API"],
    link: "https://github.com/GantaVenkataKousik/ecommerce-platform",
  },
]

export default function DeveloperPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Developer Profile
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">Comprehensive developer information and portfolio</p>
          </div>

          <Card className="mb-8 overflow-hidden border border-border/50 card-hover-effect card-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dp.jpg-WGvrVpBKWuaxc8RmfUMEhRvzZLuXlO.jpeg"
                      alt="Ganta Venkata Kousik"
                      width={150}
                      height={150}
                      className="rounded-full border-4 border-white shadow-md object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-white"></div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold">Ganta Venkata Kousik</h2>
                  <p className="text-primary text-xl font-medium">Software Developer</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>venkatakousikcse01@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Hyderabad, Telangana, India</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                      asChild
                    >
                      <a href="https://linktr.ee/GantaVenkataKousik" target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="h-4 w-4" />
                        LinkTree
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/gantavenkatakousik/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                      asChild
                    >
                      <a href="https://www.behance.net/venkatakousik" target="_blank" rel="noopener noreferrer">
                        <Palette className="h-4 w-4" />
                        Behance
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                      asChild
                    >
                      <a href="https://github.com/GantaVenkataKousik" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">About Me</h3>
                <p className="text-muted-foreground">
                  A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven automation. Experienced in working with 15+ startups to deliver end-to-end products from design to deployment. Specializes in building high-performance digital solutions across various domains, focusing on scalability, efficiency, and exceptional user experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Repositories"
                  value="190+"
                  icon={<Code className="h-4 w-4" />}
                  trend="up"
                  trendValue="3 new this month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Stars"
                  value="328"
                  icon={<Star className="h-4 w-4" />}
                  trend="up"
                  trendValue="24 new this month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Forks"
                  value="97"
                  icon={<GitFork className="h-4 w-4" />}
                  trend="up"
                  trendValue="12 new this month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Profile Views"
                  value="1200+"
                  icon={<Users className="h-4 w-4" />}
                  trend="up"
                  trendValue="86 new this month"
                  className="card-shadow"
                />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full mb-8">
            <TabsList className="mb-6 bg-card border border-border/50 p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Projects
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Activity Breakdown</CardTitle>
                    <CardDescription>Commits, PRs, and issues over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ActivityChart data={mockActivityData} />
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Language Distribution</CardTitle>
                    <CardDescription>Programming languages used in repositories</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <LanguageChart data={mockLanguageData} />
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Contribution Calendar</CardTitle>
                    <CardDescription>GitHub contribution activity over the past year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContributionCalendar data={mockContributionData} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                    <CardDescription>Programming languages and frameworks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mockSkills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <Badge
                            variant="outline"
                            className={`
                              ${skill.level === "Advanced" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : ""}
                              ${skill.level === "Intermediate" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" : ""}
                              ${skill.level === "Beginner" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" : ""}
                            `}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Language Proficiency</CardTitle>
                    <CardDescription>Programming language usage breakdown</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <LanguageChart data={mockLanguageData} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <Card className="card-shadow mb-8">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Academic background and qualifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockEducation.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/30 pl-4 pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                          <h3 className="text-lg font-semibold">{edu.institution}</h3>
                          <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                            <Calendar className="mr-1 h-3 w-3" />
                            {edu.year}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground mt-1">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Professional certifications and courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">React - The Complete Guide</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          2023
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">Udemy</p>
                      <p className="text-muted-foreground mt-1">
                        Comprehensive course on React.js and related technologies.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Machine Learning Specialization</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          2022
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">Coursera (Stanford University)</p>
                      <p className="text-muted-foreground mt-1">
                        Three-course specialization covering machine learning fundamentals.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Full Stack Web Development</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          2021
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">freeCodeCamp</p>
                      <p className="text-muted-foreground mt-1">
                        Comprehensive curriculum covering front-end and back-end development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <Card className="card-shadow mb-8">
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                  <CardDescription>Professional work history and internships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {mockExperience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary/30 pl-4 pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                          <h3 className="text-lg font-semibold">{exp.position}</h3>
                          <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                            <Calendar className="mr-1 h-3 w-3" />
                            {exp.year}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Startup Experience</CardTitle>
                  <CardDescription>Freelance and startup collaborations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Full Stack Development</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          2020 - Present
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">15+ Startup Companies</p>
                      <p className="text-muted-foreground mt-1">
                        Built end-to-end products from design to deployment for various startups across different domains. Created responsive and user-friendly web and mobile applications.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Open Source Contributor</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          2022 - Present
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">Various GitHub Projects</p>
                      <p className="text-muted-foreground mt-1">
                        Contributing to open source projects in the React, Vue.js, and Next.js ecosystem.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>Full portfolio of projects</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <div className="text-center max-w-lg">
                    <h3 className="text-xl font-semibold mb-4">Projects will be added soon</h3>
                    <p className="text-muted-foreground">
                      A complete showcase of my projects and contributions is currently being curated and will be available here shortly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
