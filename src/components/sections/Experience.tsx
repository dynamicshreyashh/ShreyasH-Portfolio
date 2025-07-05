import { EXPERIENCE } from '../../config/constants';
//import { useRouter } from 'next/router'; // Optional, only if you're using Next.js routing

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-500 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="pb-6">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className="text-gray-600 mb-2">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View Work Button */}
        <div className="text-center mt-12">
          <a 
            href="#event-management" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
          View Work
           </a>
        </div>
      </div>
    </section>
  );
}
