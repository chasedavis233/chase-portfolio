import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import resumeData from '../../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons: Record<string, React.ElementType> = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-400">{resumeData.name}</h3>
            <p className="mb-6 text-gray-400">{resumeData.title}</p>
            <div className="flex space-x-4">
              {resumeData.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-3 text-primary-400" />
                <a 
                  href={`mailto:${resumeData.email}`}
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  {resumeData.email}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3 text-primary-400" />
                <a 
                  href={`tel:${resumeData.phone}`}
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  {resumeData.phone}
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 mt-1 text-primary-400" />
                <span>{resumeData.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>© {currentYear} {resumeData.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A professional portfolio/resume built by Chase Davis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;