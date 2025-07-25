import { Code2, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, well-documented code that follows SOLID principles and best practices."
    },
    {
      icon: <Zap className="h-8 w-8 text-teal-600" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks. Always eager to expand my knowledge and skills."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Problem Solver",
      description: "Enjoy tackling complex challenges and finding efficient solutions using analytical thinking."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills and a passion for knowledge sharing."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate junior .NET developer with a strong foundation in C# and modern web development. 
            With a Computer Science degree and hands-on experience building various applications, I'm excited 
            to contribute to meaningful projects while continuing to grow my expertise.
          </p>
        </div>

 <div className="flex justify-center items-center w-full">
  <img
  src={import.meta.env.BASE_URL + "image.png"}
    alt="Developer workspace"
    className="w-full max-w-5xl mx-auto rounded-lg shadow-xl object-cover"
  />
</div>
          
          
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default About;