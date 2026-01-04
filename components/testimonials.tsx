export function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Patel",
      role: "Parent of 9th Grade Student",
      text: "The personal attention my son receives at ECHO Tutorial is unmatched. His math concepts have become much clearer in just a few months.",
    },
    {
      name: "Rohan Sharma",
      role: "Class 10 Student",
      text: "The small batch size makes it very easy to ask doubts. The teachers are friendly and explain everything until we truly understand it.",
    },
    {
      name: "Mr. Desai",
      role: "Parent of 5th Grade Student",
      text: "We were worried about our daughter's foundation, but ECHO Tutorial's focus on basics has really helped her improve her performance.",
    },
  ]

  return (
    <section className="py-24 bg-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">What Parents & Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100/50 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <p className="font-bold">{t.name}</p>
                <p className="text-xs text-blue-600 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
