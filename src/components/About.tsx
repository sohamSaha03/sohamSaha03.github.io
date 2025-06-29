import { Bot, Rocket, Zap, ArrowDown} from "lucide-react";
const About = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");           // ← match the projects ID
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I recently completed my B.S. Mechanical Engineering at University of California Riverside and am currently looking for opportunities in robotics engineering !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* ← left column */}
          <div className="space-y-6 ">

            <p className="text-gray-800 text-lg leading-relaxed">
            With a strong foundation in engineering and a love for tech, I have gained extensive experience in mechatronics, mechanical design and recently programming controls for robotics projects! I am looking to contribute to innovative robotics teams on both the hardware and software side!
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
            Here you will find highlights of my favorite engineering projects and what I've learned thus far in my career! Thanks for stopping by!
            </p>

            {/* ← ADD UCR LOGO HERE */}
            <div className="mt-6 relative">
              <img
                src="/images/ucr/bcoeLogo.avif"
                alt="UC Riverside Logo"
                className="h-80 w-1400 object-contain mx-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
              {/* the shine overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="shine-bar"></div>
              </div>
            </div>
          </div>

          {/* ← right column */}
          <div className="space-y-6">
            <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-blue-200 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Bot className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Robotics</h3>
              </div>
              <p className="text-gray-600">
                Experience in designing real time control systems for robots in ROS2 Python, Gazebo simulation, and prepping for deployment:  SSH control & Linux terminal debugging. Foundational understanding of computational geometry, kinematics, graph search algorithms and sensor integration  
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-blue-200 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Rocket className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Mechanical Engineering</h3>
              </div>
              <p className="text-gray-600">
                Strong foundation in mechanical engineering design, stress analysis, material optimization, & rapid prototyping. Experienced in SolidWorks Desing and Finite Element Analysis
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-blue-200 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Mechatronics</h3>
              </div>
              <p className="text-gray-600">
                Experienced with integration of sensors with microcontrollers and real-time data acquisition. Proficient in Arduino and Raspberry Pi programming for control systems and robotics applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ← bouncing arrow button */}
        <button
          onClick={scrollToProjects}
          className="
            absolute 
            bottom-2 
            left-1/2 
            transform -translate-x-1/2 
            text-blue-700 
            animate-bounce
          "
          aria-label="Scroll to projects"
        >
          <ArrowDown size={32} />
        </button>
    </section>
  );
};

export default About;
