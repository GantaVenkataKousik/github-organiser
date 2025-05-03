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

// Mock education data
const mockEducation = [
  {
    institution: "Anil Neerukonda Institute of Technology and Sciences",
    degree: "Bachelor of Technology in Computer Science",
    year: "2020 - 2024",
    description: "Graduated with First Class Honors. Specialized in Artificial Intelligence and Machine Learning.",
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

// Mock experience data
const mockExperience = [
  {
    company: "Tech Innovations Inc.",
    position: "Software Developer Intern",
    year: "May 2023 - Aug 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Implemented new features and fixed bugs in existing applications.",
  },
  {
    company: "CodeCraft Solutions",
    position: "Frontend Developer (Part-time)",
    year: "Jan 2023 - Apr 2023",
    description:
      "Worked on UI/UX improvements for client websites. Implemented responsive designs using HTML, CSS, and JavaScript.",
  },
  {
    company: "DataMinds Research",
    position: "Research Assistant",
    year: "Jun 2022 - Dec 2022",
    description:
      "Assisted in data collection and analysis for machine learning projects. Implemented algorithms in Python.",
  },
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
                      <span>venkatakousikcs01@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+91 7337066524</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Visakhapatnam, Andhra Pradesh, India</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
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
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Portfolio
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
                  Passionate software developer with expertise in full-stack web development. Skilled in React, Next.js,
                  and Node.js. Currently pursuing a B.Tech in Computer Science with a focus on AI and Machine Learning.
                  Committed to creating efficient, scalable, and user-friendly applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Repositories"
                  value="42"
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
                  title="Followers"
                  value="156"
                  icon={<Users className="h-4 w-4" />}
                  trend="up"
                  trendValue="8 new this month"
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
                value="experience"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Experience
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
                  <CardTitle>Volunteer Experience</CardTitle>
                  <CardDescription>Community involvement and contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
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
                        Contributing to open source projects in the React and Next.js ecosystem.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Technical Workshop Instructor</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <Calendar className="mr-1 h-3 w-3" />
                          2021 - 2023
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">College Technical Club</p>
                      <p className="text-muted-foreground mt-1">
                        Conducted workshops on web development and programming fundamentals for junior students.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {mockProjects.map((project, index) => (
                  <Card key={index} className="card-shadow hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{project.name}</span>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Visit project</span>
                          </a>
                        </Button>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Open Source Contributions</CardTitle>
                  <CardDescription>Contributions to public repositories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">React Documentation</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <GitFork className="mr-1 h-3 w-3" />5 PRs Merged
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">facebook/react</p>
                      <p className="text-muted-foreground mt-1">
                        Contributed to documentation improvements and fixed typos.
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Next.js Examples</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <GitFork className="mr-1 h-3 w-3" />3 PRs Merged
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">vercel/next.js</p>
                      <p className="text-muted-foreground mt-1">Added new examples and improved existing ones.</p>
                    </div>

                    <div className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                        <Badge variant="outline" className="md:ml-2 mt-1 md:mt-0 inline-flex">
                          <GitFork className="mr-1 h-3 w-3" />2 PRs Merged
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">tailwindlabs/tailwindcss</p>
                      <p className="text-muted-foreground mt-1">
                        Fixed bugs in utility classes and improved documentation.
                      </p>
                    </div>
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
