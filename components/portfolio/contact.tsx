"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, MessageCircle } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium font-mono">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{"Let's Connect"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {"Have a project in mind or want to discuss opportunities? I'd love to hear from you!"}
          </p>
        </div>

        {/* Contact Card */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <a
                href="mailto:dineshkunjeda16@gmail.com"
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group text-center"
              >
                <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-medium text-sm">dineshkunjeda16@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917620414621"
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group text-center"
              >
                <div className="p-4 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-foreground font-medium">+91 76204 14621</p>
                </div>
              </a>

              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-secondary/50 text-center sm:col-span-2 lg:col-span-1">
                <div className="p-4 bg-orange-500/10 rounded-full">
                  <MapPin className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground mb-6 text-center">Connect with me on social media</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://linkedin.com/in/dinesh-kunjeda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg hover:bg-blue-500/20 text-muted-foreground hover:text-blue-400 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/iamdk-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/iamdk_16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg hover:bg-cyan-500/20 text-muted-foreground hover:text-cyan-400 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">Twitter</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="mailto:dineshkunjeda16@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
