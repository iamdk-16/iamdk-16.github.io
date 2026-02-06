"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown, Cloud, Server, GitBranch } from "lucide-react"

const typingTexts = [
  "DevOps Engineer",
  "CI/CD Specialist",
  "Docker Enthusiast",
  "Cloud Explorer",
]

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTextIndex])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-[10%] animate-float opacity-20">
        <Cloud className="w-16 h-16 text-blue-500" />
      </div>
      <div className="absolute top-1/3 right-[15%] animate-float stagger-2 opacity-20">
        <Server className="w-12 h-12 text-cyan-500" />
      </div>
      <div className="absolute bottom-1/3 left-[20%] animate-float stagger-3 opacity-20">
        <GitBranch className="w-14 h-14 text-green-500" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">Available for new opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">{"Hi, I'm "}</span>
          <span className="gradient-text">Dinesh Kunjeda</span>
        </h1>

        {/* Typing Effect */}
        <div className="text-xl md:text-3xl text-muted-foreground mb-8 h-10 animate-slide-up stagger-1">
          <span className="font-mono text-blue-400">{">"} </span>
          <span className="text-foreground">{displayedText}</span>
          <span className="terminal-cursor" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up stagger-2">
          Passionate about CI/CD pipeline automation, Docker containerization, 
          Kubernetes orchestration, and infrastructure monitoring with Prometheus & Grafana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up stagger-3">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border hover:border-blue-500 text-foreground rounded-lg font-medium transition-all hover:bg-secondary"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-slide-up stagger-4">
          <a
            href="https://github.com/iamdk-16"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/dinesh-kunjeda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:dineshkunjeda16@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
