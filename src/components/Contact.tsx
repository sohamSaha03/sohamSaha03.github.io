
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-blue-300">Touch</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-300 mr-4" size={20} />
                  <div>
                    <p className="text-gray-200">📧 Email</p>
                    <p className="text-white font-medium">soham.saha025@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-blue-300 mr-4" size={20} />
                  <div>
                    <p className="text-gray-200">📱 Phone</p>
                    <p className="text-white font-medium">(510) 737-9640</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-blue-300 mr-4" size={20} />
                  <div>
                    <p className="text-gray-200">📍 Location</p>
                    <p className="text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/sohamsaha025" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a 
                    href="https://github.com/sohamSaha03" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    <Github size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-200 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-gray-200 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
