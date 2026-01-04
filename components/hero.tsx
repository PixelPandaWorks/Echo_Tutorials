"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8", "duration-1000")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-50/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div ref={heroRef} className="opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <MapPin size={14} /> Vapi / Valsad
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Personal Attention. <br />
            <span className="text-blue-600">Strong Concepts.</span> <br />
            Better Results.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-lg">
            Empowering students from 1st to 10th Standard (All Boards) with concept-based learning and dedicated
            support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-md transition-transform hover:scale-105 active:scale-95"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Contact on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full px-8 h-12 text-md border-blue-600 text-blue-600 hover:bg-blue-50 transition-transform hover:scale-105 active:scale-95 bg-transparent"
            >
              <a href="tel:+911234567890">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </Button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 blur-3xl rounded-full" />
          <img
            src="/student-studying.png"
            alt="Student Learning"
            className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-bounce duration-[3000ms] hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <span className="font-bold">98%</span>
              </div>
              <div>
                <p className="text-sm font-bold">Success Rate</p>
                <p className="text-xs text-muted-foreground">in Board Exams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
