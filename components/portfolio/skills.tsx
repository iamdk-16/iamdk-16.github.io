"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Cloud, Container, GitBranch, Monitor, Shield, Database, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "DevOps Tools",
    icon: GitBranch,
    color: "green",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Jenkins", level: 90 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "blue",
    skills: [
      { name: "AWS EC2", level: 85 },
      { name: "AWS S3", level: 85 },
      { name: "AWS IAM", level: 80 },
      { name: "AWS EKS", level: 75 },
    ],
  },
  {
    title: "Monitoring",
    icon: Monitor,
    color: "purple",
    skills: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 90 },
      { name: "Spring Boot Actuator", level: 80 },
      { name: "Node Exporter", level: 80 },
    ],
  },
  {
    title: "Scripting",
    icon: Code,
    color: "orange",
    skills: [
      { name: "Python", level: 85 },
      { name: "Bash/Shell", level: 90 },
      { name: "SQL", level: 80 },
      { name: "Maven", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Container,
    color: "cyan",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Spring Boot", level: 80 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Configuration Mgmt",
    icon: Shield,
    color: "red",
    skills: [
      { name: "Ansible", level: 80 },
      { name: "Linux (Ubuntu)", level: 90 },
      { name: "Linux (CentOS)", level: 85 },
      { name: "Windows", level: 75 },
    ],
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    bar: "bg-blue-500",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    bar: "bg-cyan-500",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    bar: "bg-green-500",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    bar: "bg-orange-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    bar: "bg-purple-500",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
    bar: "bg-red-500",
  },
}

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          const newLevels: Record<string, number> = {}
          for (const category of skillCategories) {
            for (const skill of category.skills) {
              newLevels[`${category.title}-${skill.name}`] = skill.level
            }
          }
          setTimeout(() => setAnimatedLevels(newLevels), 300)
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
    <section id="skills" ref={sectionRef} className="py-24 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Settings className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium font-mono">skills --list</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and managing modern cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorMap[category.color]
            const Icon = category.icon
            
            return (
              <div
                key={category.title}
                className={`bg-card rounded-xl border border-border p-6 hover:border-${category.color}-500/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const animatedLevel = animatedLevels[`${category.title}-${skill.name}`] || 0
                    
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-foreground">{skill.name}</span>
                          <span className={`text-sm font-mono ${colors.text}`}>{animatedLevel}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${animatedLevel}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tools Cloud */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-semibold text-foreground mb-6">Other Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Docker Compose", "Express.js", "CloudWatch", "Maven", "Git Actions", "AWS CLI", "Helm", "YAML", "REST APIs", "Microservices"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-card rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-blue-500/50 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
