import Link from "next/link"
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="./" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
            <div className="rounded-full p-1 border-2 border-primary mb-4">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                className="rounded-full h-[150px] w-[150px]"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Your Name</h1>
            <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild>
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Hello! I'm a passionate full-stack developer with expertise in building modern web applications. I
                  specialize in creating responsive, user-friendly interfaces and robust backend systems.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With several years of experience in the industry, I've worked on a variety of projects ranging from
                  e-commerce platforms to data visualization tools. I'm constantly learning and exploring new
                  technologies to stay at the forefront of web development.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the
                  kitchen.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="About Me"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="JavaScript" level={90} />
              <SkillBadge name="TypeScript" level={85} />
              <SkillBadge name="React" level={90} />
              <SkillBadge name="Next.js" level={85} />
              <SkillBadge name="Node.js" level={80} />
              <SkillBadge name="Express" level={75} />
              <SkillBadge name="MongoDB" level={70} />
              <SkillBadge name="PostgreSQL" level={75} />
              <SkillBadge name="HTML/CSS" level={95} />
              <SkillBadge name="Tailwind CSS" level={90} />
              <SkillBadge name="Git" level={85} />
              <SkillBadge name="Docker" level={70} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe integration."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "MongoDB", "Stripe", "Tailwind CSS"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates using Socket.io."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Node.js", "Socket.io", "PostgreSQL"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="A weather dashboard that displays current and forecasted weather data using a third-party API."
                image="/placeholder.svg?height=300&width=500"
                tags={["JavaScript", "API Integration", "Chart.js", "CSS"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
              />
              <ProjectCard
                title="Blog Platform"
                description="A content management system for creating and managing blog posts with user authentication."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "Prisma", "NextAuth.js", "Vercel"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
              />
              <ProjectCard
                title="Fitness Tracker"
                description="A mobile-responsive application for tracking workouts and visualizing progress over time."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Firebase", "D3.js", "Material UI"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
              />
              <ProjectCard
                title="Recipe Finder"
                description="A recipe search application that allows users to find recipes based on available ingredients."
                image="/placeholder.svg?height=300&width=500"
                tags={["TypeScript", "React", "API Integration", "Styled Components"]}
                demoUrl="https://example.com"
                codeUrl="https://github.com"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50 rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm currently open to freelance opportunities and collaborations. If you have a project in mind or
                  just want to say hello, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

