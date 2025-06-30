import React from "react";
import { Phone, MapPin, Github, Linkedin, Mail } from "lucide-react";

const HeaderSection: React.FC = () => {
  return (
    <div className="text-center border-b border-custom-teal/30 pb-6">
      <h1 className="text-3xl font-bold green-text-gradient mb-2">Tomás Quinteros</h1>
      <p className="text-xl text-custom-green mb-4">Frontend Developer</p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
        <div className="flex items-center gap-1">
          <Mail className="h-4 w-4 text-custom-green" />
          tomyquinteros494@gmail.com
        </div>
        <div className="flex items-center gap-1">
          <Phone className="h-4 w-4 text-custom-green" />
          +54 9 11 3333-3333
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-custom-green" />
          Córdoba, Argentina
        </div>
        <div className="flex items-center gap-1">
          <Github className="h-4 w-4 text-custom-green" />
          github.com/tquinteros
        </div>
        <div className="flex items-center gap-1">
          <Linkedin className="h-4 w-4 text-custom-green" />
          linkedin.com/in/tomas-quinteros1
        </div>
      </div>
    </div>
  );
};

export default HeaderSection; 