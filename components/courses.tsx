import { Check } from "lucide-react"

export function Courses() {
  const courses = [
    {
      title: "Class 1st – 5th",
      focus: "Primary Foundation",
      subjects: ["Mathematics", "English", "Science", "Environmental Studies", "Languages"],
      features: ["Language building", "Basic math concepts", "Creative learning"],
    },
    {
      title: "Class 6th – 8th",
      focus: "Middle School Growth",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi/Gujarati", "Computer"],
      features: ["Analytical skills", "Regular assessments", "Project guidance"],
    },
    {
      title: "Class 9th – 10th",
      focus: "Secondary Excellence",
      subjects: ["Advanced Mathematics", "Science (Phy/Che/Bio)", "Social Science", "English", "Languages"],
      features: ["Board exam prep", "Doubt-solving sessions", "Time management"],
    },
  ]

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Batches</h2>
          <p className="text-muted-foreground">
            Comprehensive coverage for all academic requirements from 1st to 10th Standard.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col border border-border rounded-2xl overflow-hidden hover:border-blue-300 transition-colors bg-white shadow-sm"
            >
              <div className="bg-blue-600 p-6 text-white">
                <p className="text-blue-100 text-sm font-medium mb-1 uppercase tracking-wider">{course.focus}</p>
                <h3 className="text-2xl font-bold">{course.title}</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase text-muted-foreground mb-4 tracking-tight">Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto space-y-3">
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-blue-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-blue-600 font-medium italic">Supporting GSEB, CBSE, ICSE & All Major Boards</p>
        </div>
      </div>
    </section>
  )
}
