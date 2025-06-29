
const ProjectDetails = () => {
  const projectDetails = [
    {
      id: 1,
      title: "Robot Mounted Pan-Tilt Laser Alignment System with OpenCV ArUco Tracking (Senior Design)",
      goals: [
       "Develop a Raspberry Pi–based robotic system that uses OpenCV and ArUco marker tracking to aim a laser within a 1″ target zone on a moving fast-steering mirror.",
       "Design and fabricate a 3D printed pan-tilt platform to house delicate optical and electronic components.",
       "Implement ROS2 serial bridges to interface a Raspberry Pi with an Arduino for laser actuation and motorized waveplate control."
      ],
      process: [
        "Built the pan-tilt assembly in SolidWorks, including a baseplate, servo housings, and tilt arm with heat-inserted threads for fasteners.",
        "Integrated all components onto Arlo Bot 12V SLA battery using Buck Converters to convert DC-DC and reduce voltage.",
        "Programmed Python ROS2 nodes to subscribe to ArUco marker error data and output strings to serial-controlled devices.",
        "Arduino Serial device recieves strings ('redON', 'greenON''redOFF', 'greenOFF' to send digital HI signals to pins that flood transistor base, allowing current to flow thru laser diode and turn it on/off.",
        "Tuned precision optics kinematic mounts to align lasers with each other using Dichroic splitter to align lasers and iteratively tuned PD controller for servo motors to optimize system dynamics",
        "Conducted FEA to validate <<1mm displacement on baseplate to preserve optical alignment and conducted bench torque tests to validate Tilt Arm design"
      ],
      results: [
        "Achieved reliable real-time laser alignment within a 1″ circle using PD-tuned servos driven by ArUco feedback on Raspberry Pi.",
        "Successfully coordinated laser activation and optical rotation through an Arduino-based ROS2-compatible serial interface.",
        "Validated the full mechatronic system under power with no major mechanical failures, supporting future upgrades for dual-laser, automated waveplate, and mobile battery operation.",
        "Final design selected to present at the Caltech Quantum Robotics Engineering Workshop for a live demonstration (May 2025)."
      ],
      images: ["/images/rqc/rqcMechatronics.png", "/images/rqc/rqcFea.png", "/images/rqc/rqcCaltech.png"]
    },
    {
      id: 2,
      title: "FlowKing (In-Progress Personal Project)",
      goals: [
        "Design and build a sensor to detect and time fluid flow in a plastic pipe with no moving parts to ultimately create a beverage chug timer novelty device",
        "Using real time data acquisition, accurately detect the first fluid flow in a pipe as well as the termination of fluid flow repeatedly",
        "Transition breadboard prototype onto MVP with battery integration, custom PCBA and 3D printed housing with single button user interface"
      ],
      process: [
        "Develop a capacitive sensor using copper tape strips hooked up to Arduino breadboard circuits and write code for the system to calibrate the sensor and determine flow events and change the sensor's state (flowing, flow terminated, standby). ",
        "Plates are placed on the outside of the pipe on opposite sides. Arduino samples the time it takes to charge the capacitor to a 60% full at 100Hz (time to charge is typically under 1000us)",
        "Upon button press, the system takes 50 samples to determine the baseline charge time (air) and the remains on standby to detect any significant deviations in the charge time. Upon detecting a deviation the system changes state to flowing and begins a timer. Once the flow approaches termination, the capacitance value re-approaches baseline and the flow duration is reported on the TM1637 Clock Module. ",
        "Breadboard Arduino circuit includes on button, TM1637 Clock to display time, LEDs to indicate state, and resistors to make up RC circuit (capacitive sensor)"
      ],
      results: [
        "Currently the system can accurately detect fluid flow start and termination accurately when compared to humans with a timer.",
        "Expected error is around 10ms since that is the sampling time which is acceptable for the commercial purpose of this product.",
        "Currently work involves transitioning the system to a breadboard prototype using ATtiny85 micro-controller chip, which involves refactoring code to match ATtiny85 capabilities and flashing chip. Next steps following that would be battery breadboard testing and mechanical design of the pipe attachment."
      ],
      images: ["/images/flowking/labeled.png", "/images/flowking/flowking.PNG", "/images/flowking/ide.JPG"]
    },
    {
      id: 3,
      title: "Foundations of Robotics Projects (ME144)",
      goals: [
        "Gain experience working with ROS, Linux Ubuntu (VMware) and writing python programs to control turtlebot3 and Reactor X 150 arm in Gazebo",
        "Gain fundamental understanding of basic principles in robotics including kinematics, transformation matrices, reference frames, motion planning and collision avoidance",
        "Implement basic path planning routines and collision avoidance for a Turtlebot3"
      ],
      process: [
        "Implemented PD and PID controllers in python for basic control loops",
        "Implement basic path planning routines, A* search & Uniform Cost Search, Product of Exponentials based inverse kinematics, 3 & 5 order polynomial time-scaling, and reactive force & distance based collision avoidance",
        "Deploy A* path planning, gradient descent and distance-based collision avoidance on a Turtlebot3, uploading code through secure shell (SSH)"
      ],
      results: [
        "Successfully implemented all listed motion planning and collision avoidance routines in ROS and simulated on Gazebo, as well as PoE inverse kinematics",
        "Gained strong understanding of basic Robotics software development processes and navigating ROS structure (publisher/listeners, nodes).",
        "Developed reusable library of functions and scripts for basic motion planning, to utilize in personal projects involving robotic arms"
      ],
      images: ["/images/ee144/arm.png", "/images/ee144/gazebo.png", "/images/ee144/graph.png"]
    },
    {
      id: 4,
      title: "Robotics Motion Planning & Kinematics Projects (ME145)",
      goals: [
        "Develop a deep understanding of robotics motion planning & Kinematics through hands-on implementation of algorithms in computational geometry, robot kinematics, and decomposition + search based planning.",
        "Gain proficiency techniques used in real-world autonomous systems, including Configuration Space Breadth First Search, sampling methods, geometric collision detection and Simulink modeling."
      ],
      process: [
        "Built foundational MATLAB functions for line/segment distance, polygon classification, point-in-polygon checks, and collision detection to support motion planning.",
        "Implemented Bug 1 obstacle avoidance, BFS tree/path planning, and polygon vertex classification for workspace decomposition.",
        "Implemented 2D+ sampling methods including Uniform Sukharev, Random, and Halton pseudo-random sequences, and tested them in c-space.",
        "Modeled and simulated nonlinear unicycle and differential-drive robots in Simulink, comparing results and validating motion behavior.",
        "Visualized configuration spaces of a two-link planar robot arm using collision-aware sampling techniques."
      ],
      results: [
        "Culminated in a fully integrated motion planning pipeline: a MATLAB script that accepts two-link robot parameters, circular obstacles, and start/goal configurations and outputs a graph animation of BFS path planning through collision free sampled points.",
        "Successfully executed BFS with in C-Space with collision free sample points.",
        "Learned foundational computational geometry methods",
        "Created Simulink block diagrams of differential drive and unicycle models"
      ],
      images: ["/images/me145/bug1.png", "/images/me145/twoLinkMotion.png", "/images/me145/twoLink.png"]
    },
    {
      id: 5,
      title: "Formula SAE Suspension Upright Design & Analysis",
      goals: [
        "Design in SolidWorks a lightweight, structurally sound suspension upright for a 300 kg Formula SAE race car",
        "Accommodate suspension arm, steering toe, and braking components",
        "Derive all necessary geometry specs (King Pin Inclination Angle (KPI), caster angle, joint spacing) manually from the provided CAD assembly",
        "Evaluate design with simulation tools"
      ],
      process: [
        "Heavily research background on FSAE suspension and the function of an upright",
        "Measured suspension geometry in SolidWorks (evaluate tool); extracted +5.01° KPI, +3.33° caster, and 84 mm joint spacing",
        "Chose \"brick-style\" structure for ease of design and manufacturing and designed mounts and weight-saving slots aligned with suspension axes",
        "Selected 6061-T6 aluminum for strength and cost after comparison",
        "Simulated 2 G lateral / 3 G vertical cornering loads on a 300 kg vehicle",
        "Iterated design based on FEA to find stress concentrations using a dummy wheel hub to transmit remote loads from wheel"
      ],
      results: [
        "Final part mass: 0.464 kg; center of mass offset ~2 mm from bore axis",
        "Passed primary FEA; steering arm showed highest stress",
        "Secondary reversed-load FEA revealed outer deformation under lateral stress",
        "Identified design improvements for future reinforcement and slot optimization",
        "Ranked 1st in recruitment class for design execution and technical presentation"
      ],
      images: ["/images/upright/remoteLoad.jpg", "/images/upright/upright.JPG", "/images/upright/fea.PNG"]
    },
    {
      id: 6,
      title: "Formula SAE Drivetrain Mechatronics & Dash Design",
      goals: [
        "Safely test and validate high-voltage electric drivetrain components (motor, inverter, resolver) on the bench.",
        "Calibrate motor resolver without access to a dyno",
        "Ensure reliable CAN communication between embedded systems for motor control.",
        "Design a safe motor testbench to eliminate electrical hazards and improve workflow."
      ],
      process: [
        "Motor Calibration: Creatively proposed using electric skateboard as a makeshift dyno to spin the motor at 20 mph to calibrate the resolver",
        "Motor Testbench Overhaul: Identified unsafe wiring and high-voltage risk in the existing testbench setup.",
        "Rebuilt the bench with proper cable management, high-voltage-safe connectors, and optimized layout",
        "Verified communication across CAN bus and confirmed safe 3-phase inverter-to-motor operation using a wall-powered 100 V DC supply."
      ],
      results: [
        "Successfully calibrated motor + resolver without formal equipment, accelerating development timeline and allowing for testing.",
        "Enabled repeatable, motor and CAN-bus testing safe from hi-voltage hazards",
        "Testing bench transitioned from dangerous and disorganized to structured and safe"
      ],
      images: ["/images/drivetrain/driveTrain.PNG", "/images/drivetrain/skateboard.png", "images/drivetrain/dash.png"]
    },
    

  ];

  return (
    <section id="project-details" className="py-20 px-4 bg-blue-50/50">
      <div className="max-w-4xl mx-auto space-y-20">
        {projectDetails.map((project) => (
          <div key={project.id} id={`project-detail-${project.id}`} className="bg-white/90 rounded-xl p-8 shadow-lg border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{project.title}</h2>
            
            {/* Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full object-contain rounded-lg border border-blue-200 max-h-[400px] mx-auto"
                />
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Goals */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Goals</h3>
                <ul className="space-y-3">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="text-gray-700 text-sm leading-relaxed">
                      • {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Process</h3>
                <ul className="space-y-3">
                  {project.process.map((step, index) => (
                    <li key={index} className="text-gray-700 text-sm leading-relaxed">
                      • {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-gray-700 text-sm leading-relaxed">
                      • {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
