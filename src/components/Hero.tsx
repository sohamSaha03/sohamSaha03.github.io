
import { ArrowDown } from "lucide-react";
import portrait from "../assets/images/portrait.png";
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight transform hover:scale-105 transition-all duration-300">
            Welcome! I'm{" "}
            {/* wrap in a relative group so we can layer the shine on top */}
            <span className="relative inline-block group">
              <span className="bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent">
                Soham Saha
              </span>

              {/* the white shine bar */}
              <span className="shine-bar-text"></span>
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-blue-600 hover:border-blue-800 text-blue-700 hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-blue-50"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <div className="w-96 h-96 bg-white/80 backdrop-blur-sm rounded-full border-4 border-blue-200 shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <img
              src={portrait}
              width={384}
              height={384}
              alt="Soham’s portrait"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-700 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
