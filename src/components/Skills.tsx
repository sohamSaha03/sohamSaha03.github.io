
import { Rocket, Code2, Bot } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mechanical Engineering",
      icon: <Rocket className="text-blue-600" size={32} />,
      skills: ["SolidWorks", "FEA", "Stress Analysis", "3D Printing", "Laser Optics", "Breadboarding + Prototyping"]
    },
    {
      title: "Programming",
      icon: <Code2 className="text-green-600" size={32} />,
      skills: ["Arduino", "Python", "Matlab", "C++", "Prompt Engineering (Vibe)", "HTML/CSS"]
    },
    {
      title: "Robotics",
      icon: <Bot className="text-purple-600" size={32} />,
      skills: ["ROS2", "ROS", "Linux", "Raspberry Pi", "Gazebo Sim", "OpenCV", "Control Systems", "Motion Planning", "Kinematics"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-blue-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 p-6 rounded-xl backdrop-blur-sm border border-blue-200 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
