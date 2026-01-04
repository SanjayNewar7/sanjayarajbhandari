import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Graphics Designer',
    company: 'Loopix',
    period: '2025 - Present',
    duration: 'Current',
    description: 'Creating compelling visual designs and branding solutions for diverse clients.',
  },
  {
    title: 'Project Manager',
    company: 'Brothers Production',
    period: '2024 - Present',
    duration: 'Current',
    description: 'Leading creative projects from concept to completion, managing teams and ensuring quality delivery.',
  },
  {
    title: 'Graphics Designer',
    company: 'Bihani Tech',
    period: '2023 - 2025',
    duration: '2.5 years',
    description: 'Developed comprehensive design solutions including branding, social media content, and marketing materials.',
  },
];

export function Experience() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Passionate graphics designer with a keen eye for detail and a commitment to creating 
            impactful visual experiences that resonate with audiences.
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mb-8">Experience</h3>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-start gap-3 mb-2 md:mb-0">
                    <div className="bg-blue-600 p-2 rounded-lg mt-1">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-blue-600">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 ml-11 md:ml-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 ml-11">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
