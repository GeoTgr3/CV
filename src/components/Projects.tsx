import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
 const projects = [
  {
    title: "Profile4U",
    description: "A personal profile and portfolio web app built with ASP.NET, featuring user authentication, project showcase, and responsive design.",
    technologies: ["ASP.NET", "C#", "Bootstrap", "SQL Server"],
    image: "/gg.png", // Make sure gg.png is in the public folder
    github: null,
    demo: "http://profile4u.runasp.net/"
  },
  {
    title: ".net web api",
    description: "bACKEND application for project ",
    technologies: ["ASP.NET Core MVC", "Entity Framework", "Identity"],
    image: "/jj.png", // Make sure jj.png is in the public folder
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my .NET development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Code className="h-6 w-6 text-white bg-black bg-opacity-50 rounded p-1" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                 
               
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;