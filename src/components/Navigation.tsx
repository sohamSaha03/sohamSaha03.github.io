
import { useState } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-700">
            Soham Saha
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://www.linkedin.com/in/sohamsaha025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/sohamSaha03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Github size={28} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a
                href="https://www.linkedin.com/in/sohamsaha025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/sohamSaha03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
