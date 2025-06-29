
import { ExternalLink, Github } from "lucide-react";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Robot Mounted Pan-Tilt Laser Alignment System with OpenCV ArUco Tracking",
      description: "A Raspberry Pi–based, camera-driven pan-tilt system integrates OpenCV ArUco tracking with PD-tuned servos to align a laser within a 1″ target circle in real time. The demo achieved responsive motion tracking and enabled rapid hardware iterations for dual-laser and motorized waveplate upgrades.",
      tech: ["ROS2", "Python", "RaspberryPi", "Ardruino", "Mechatronics", "SolidWorks", "3D Printing", "Servo Control", "Laser Optics"],
      image: "/images/rqc/rqcCaltech.png",
      liveurl: "#",
      githubUrl: "#"
       
    },
    {
      id: 2,
      title: "FlowKing (In-Progress Personal Project)",
      description: "A  liquid flow sensor that times liquid flow duration using capacitative sensing and no moving parts. Arduino based, moving to ATtiny85 and battery for handheld prototype",
      tech: ["Capacitative Sensor Design", "Arduino", "Sensor Debouncing", "Embedded Systems Breadboarding"],
      image: "/images/flowking/flowking.PNG",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Foundations of Robotics Projects (ME144)",
      description: "Python-driven ROS experiments on Turtlebot3 and a Reactor X 150 arm in Gazebo implemented PD/PID control, A*, uniform-cost, and reactive collision avoidance, plus inverse-kinematics routines. A reusable library of planning and control scripts was developed for future robotics work.",
      tech: ["Python", "ROS", "Gazebo", "Turtlebot3"],
      image: "/images/ee144/arm.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Robotics Motion Planning & Kinematics Projects (ME145)",
      description: "A MATLAB-based pipeline was built covering collision detection, sampling methods, Bug 1 obstacle avoidance, BFS path planning, and Simulink modeling of differential-drive and unicycle robots. The final script executes collision-aware BFS in C-Space and outputs validated motion plans.",
      tech: ["MATLAB", "Simulink", "Motion Planning", "Collision Detection"],
      image: "/images/me145/me145collage.png",
      liveUrl: "#",
      githubUrl: "#"
      
    },
    {
      id: 5,
      title: "Formula SAE Suspension Upright Design & Analysis",
      description: "A lightweight, 6061-T6 aluminum suspension upright was modeled in SolidWorks, deriving KPI, caster, and joint spacing and iterating via FEA under cornering loads. The final part (0.464 kg) passed primary and reversed-load simulations and earned top marks for design execution.",
      tech: ["SolidWorks", "FEA Analysis", "6061-T6 Aluminum", "Suspension Design"],
      image: "/images/upright/fea.PNG",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Formula SAE Drivetrain  Mechatronics & Dash Design",
      description: "A high-voltage electric drivetrain bench was overhauled, using an electric skateboard as a makeshift dyno to calibrate the resolver and redesigning unsafe wiring and connectors. The new bench supports safe, repeatable CAN-bus and motor testing at 100 V DC without hazards.",
      tech: ["High-Voltage Systems", "CAN Bus", "Motor Control", "Safety Design"],
      image: "/images/drivetrain/driveTrain.PNG",
      liveUrl: "#",
      githubUrl: "#"
    },
    
  ];

  const scrollToProjectDetail = (projectId: number) => {
    const element = document.getElementById(`project-detail-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            A showcase of my engineering projects that demonstrate my technical skills and problem-solving abilities. Click on any project to learn more!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-200 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              onClick={() => scrollToProjectDetail(project.id)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))} 
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    See More! 
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
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
