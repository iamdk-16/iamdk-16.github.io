"use client"

import { useEffect, useRef, useState } from "react"
import { Folder, ExternalLink, Github, Star, GitFork } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "CI/CD Pipeline with Kubernetes Deployment",
    description: "Implemented complete CI/CD pipeline using Jenkins with automated builds, testing, and Kubernetes deployment. Configured Spring Boot application with monitoring using Prometheus and Grafana dashboards. Reduced deployment time by 70% and eliminated manual deployment errors through automation.",
    tags: ["Jenkins", "Docker", "Kubernetes", "Spring Boot", "Prometheus", "Grafana"],
    color: "green",
    github: "https://github.com/iamdk-16/springboot-notes-app-cicd",
    demo: null,
    stats: {
      stars: 10,
      forks: 5,
    },
  },
  {
    title: "Containerized Application with Monitoring Stack",
    description: "Containerized full-stack MERN application using Docker Compose with multi-stage builds. Integrated Prometheus for custom application metrics and Node Exporter for system monitoring. Built Grafana dashboards for real-time monitoring of API performance, database health, and infrastructure.",
    tags: ["Docker", "Docker Compose", "Prometheus", "Grafana", "Node.js", "React.js", "MongoDB"],
    color: "cyan",
    github: "https://github.com/iamdk-16/Expense-Tracker",
    demo: null,
    stats: {
      stars: 8,
      forks: 3,
    },
  },
]

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  blue: { border: "border-blue-500/30", text: "text-blue-400", bg: "bg-blue-500/10" },
  cyan: { border: "border-cyan-500/30", text: "text-cyan-400", bg: "bg-cyan-500/10" },
  green: { border: "border-green-500/30", text: "text-green-400", bg: "bg-green-500/10" },
  orange: { border: "border-orange-500/30", text: "text-orange-400", bg: "bg-orange-500/10" },
  purple: { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-500/10" },
  red: { border: "border-red-500/30", text: "text-red-400", bg: "bg-red-500/10" },
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
            <Folder className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium font-mono">ls ~/projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in DevOps, cloud infrastructure, and automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color]
            
            return (
              <div
                key={project.title}
                className={`group bg-card rounded-xl border border-border p-6 hover:border-blue-500/50 transition-all duration-500 project-card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Folder className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stats.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.stats.forks}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded ${colors.bg} ${colors.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://github.com/iamdk-16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-blue-500 text-foreground rounded-lg font-medium transition-all hover:bg-secondary"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
