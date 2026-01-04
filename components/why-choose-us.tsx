"use client"

import { Users, Book, CheckCircle, Brain, GraduationCap, Heart } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      title: "Small Batches",
      description: "Only 8–10 students per batch to ensure personalized attention for everyone.",
      icon: Users,
    },
    {
      title: "Personal Attention",
      description: "We focus on each student's specific strengths and weaknesses to help them excel.",
      icon: Heart,
    },
    {
      title: "Doubt-Solving",
      description: "Dedicated sessions to ensure no question goes unanswered and concepts are clear.",
      icon: CheckCircle,
    },
    {
      title: "All Boards Covered",
      description: "Expert guidance for GSEB, CBSE, ICSE, and other boards from 1st to 10th.",
      icon: GraduationCap,
    },
    {
      title: "Concept-Based Learning",
      description: "We focus on 'Why' and 'How' rather than just rote memorization.",
      icon: Brain,
    },
    {
      title: "Friendly Environment",
      description: "A disciplined yet supportive atmosphere that motivates students to learn.",
      icon: Book,
    },
  ]

  return (
    <section id="why-us" className="py-24 bg-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ECHO Tutorial?</h2>
          <p className="text-muted-foreground">
            Our teaching methodology is designed to create a strong foundation for future success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
