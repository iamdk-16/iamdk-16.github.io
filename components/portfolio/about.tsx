"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal, MapPin, Briefcase, GraduationCap } from "lucide-react"

const stats = [
  { value: "70%", label: "Faster Deployments" },
  { value: "2+", label: "DevOps Projects" },
  { value: "8.30", label: "CGPA" },
  { value: "2024", label: "B.E. Graduate" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium font-mono">whoami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Card */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-muted-foreground font-mono">about.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <p className="text-green-400 mb-2">$ cat about.txt</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="text-blue-400">name:</span> Dinesh Kunjeda
                  </p>
                  <p>
                    <span className="text-blue-400">role:</span> DevOps Engineer
                  </p>
                  <p>
                    <span className="text-blue-400">location:</span> Pune, Maharashtra
                  </p>
                  <p>
                    <span className="text-blue-400">specialization:</span> [
                  </p>
                  <p className="pl-4">{'"CI/CD Pipeline Automation",'}</p>
                  <p className="pl-4">{'"Docker & Kubernetes",'}</p>
                  <p className="pl-4">{'"AWS Cloud Services",'}</p>
                  <p className="pl-4">{'"Prometheus & Grafana Monitoring"'}</p>
                  <p>]</p>
                  <p className="text-green-400 mt-4">$ _</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {"DevOps Engineer with hands-on expertise in CI/CD pipeline automation, Docker containerization, \
              Kubernetes orchestration, and infrastructure monitoring. Proven ability to implement end-to-end \
              DevOps workflows, reducing deployment time by 70% through Jenkins automation and optimizing \
              system performance with Prometheus and Grafana."}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Pune, Maharashtra</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Briefcase className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-foreground font-medium">Open to Opportunities</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border col-span-full">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="text-foreground font-medium">{"B.E. in Electronics & Telecommunication - Keystone School of Engineering"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-colors"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
