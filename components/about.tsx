"use client"

import { useEffect, useRef } from "react"

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8", "duration-1000")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="max-w-4xl mx-auto text-center opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About ECHO Tutorial</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to <span className="text-blue-600 font-semibold">ECHO Tutorial</span>, a space where learning is
                not just about grades, but about deep understanding. Based in Vapi and Valsad, we specialize in
                providing high-quality tuition for students from Class 1 to 10 across all educational boards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach is driven by a passion for teaching and a commitment to individual student growth. We
                believe that every student has a unique learning style, and our goal is to provide a friendly
                environment that nurtures their potential.
              </p>
            </div>
            <div className="relative">
              <img src="/teacher-helping-student.jpg" alt="Our Teaching Approach" className="rounded-2xl shadow-xl" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-lg text-sm font-medium">
                Small Batches Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
