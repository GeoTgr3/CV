import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: ".NET Technologies",
      skills: [
        { name: "C#", level: 85 },
        { name: "ASP.NET Core", level: 80 },
        { name: "Entity Framework", level: 75 },
        { name: ".NET Framework", level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Bootstrap", level: 70 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "SQL Server", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Visual Studio", level: 90 },
        { name: "Azure", level: 60 },
        { name: "REST APIs", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Docker', 'Postman', 'Swagger', 'JWT', 'SignalR', 'Blazor',
              'xUnit', 'AutoMapper', 'FluentValidation', 'Serilog', 'LINQ', 'MVC'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;