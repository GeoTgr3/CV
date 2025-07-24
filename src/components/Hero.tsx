
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
        
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hello, I'm <span className="text-blue-600">Achraf Bel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Junior .NET Developer
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Passionate about building robust web applications with C#, ASP.NET Core, and modern technologies. 
            Currently seeking opportunities to grow and contribute to innovative development teams.
          </p>
        </div>
      </div>

       
    </section>
  );
};

export default Hero;