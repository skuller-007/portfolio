export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  skills?: string[];
  achievements?: string[];
}

export const timeline: TimelineItem[] = [
  {
    id: 'masters-northeastern-2026',
    title: 'Master of Science in Advanced and Intelligent Manufacturing',
    organization: 'Northeastern University',
    location: 'Boston, MA',
    period: '2024 - 2026 (Expected)',
    type: 'education',
    description: 'Specialized coursework in Process Design, Lean Manufacturing, Intelligent Manufacturing, Digital Manufacturing, and Simulation Analysis. Focus on bridging smart manufacturing, supply chain optimization, and AI-driven automation.',
    skills: ['Advanced Manufacturing', 'Process Design', 'Lean Manufacturing', 'Intelligent Manufacturing', 'Digital Manufacturing', 'Simulation Analysis'],
    achievements: [
      'Current GPA: 3.82/4.0',
      'Expected Graduation: May 2026',
      'Focus: Industry 4.0 and Smart Manufacturing Integration'
    ]
  },
  {
    id: 'hero-motocorp-team-manager-2024',
    title: 'Team Manager - Manufacturing Excellence',
    organization: 'Hero MotoCorp',
    location: 'India',
    period: '2022 - 2024',
    type: 'work',
    description: 'Led manufacturing optimization initiatives for robotic welding systems and IoT-enabled smart manufacturing cells. Implemented predictive maintenance strategies and SAP MRP digitization for Vida Electric Vehicle production.',
    skills: ['PLC/HMI Automation', 'IoT Integration', 'Predictive Maintenance', 'SAP MRP', 'Robotic Welding', 'Supply Chain Optimization', 'TPM', 'Lean Manufacturing'],
    achievements: [
      'Achieved 15% efficiency boost through PLC/HMI automation for robotic welding systems',
      'Implemented IoT-enabled Smart Cell Dashboard with Limble CMMS, gaining 11% availability improvement',
      'Reduced downtime by 83% through predictive maintenance implementation',
      'Achieved ₹28 per EV cost reduction (~$0.5/vehicle) through tool cost optimization',
      'Contributed to ₹9M annual savings through supply chain efficiency and lean initiatives',
      'Optimized fixtures and jigs for Vida Electric Vehicle manufacturing',
      'Digitized SAP MRP for demand forecasting and inventory optimization'
    ]
  },
  {
    id: 'bosch-rexroth-intern-2019',
    title: 'Engineering Intern - Fluid Power Systems',
    organization: 'Bosch Rexroth',
    location: 'India',
    period: '2019',
    type: 'work',
    description: 'Specialized in fluid power and hydraulics design, focusing on valves, actuators, and pneumatic systems integration with control systems for automotive applications.',
    skills: ['Fluid Power Design', 'Hydraulics', 'Valves & Actuators', 'Pneumatic Systems', 'Control Systems Integration', 'High-speed Automation'],
    achievements: [
      'Designed fluid power systems for automotive applications',
      'Integrated control systems with hydraulics for improved reliability',
      'Gained exposure to high-speed automation systems',
      'Contributed to system reliability improvements through control integration'
    ]
  },
  {
    id: 'techsnap-intern-2021',
    title: 'Software Development Intern',
    organization: 'TechSnap',
    location: 'Remote',
    period: '2021',
    type: 'work',
    description: 'Developed modular Python applications with focus on creating reusable codebase for scalable projects and software architecture.',
    skills: ['Python Programming', 'Modular Development', 'Software Architecture', 'Code Reusability', 'Scalable Systems'],
    achievements: [
      'Developed modular Python applications for scalable projects',
      'Created reusable codebase architecture',
      'Implemented best practices for software development',
      'Contributed to scalable project frameworks'
    ]
  },
  {
    id: 'bachelors-srm-2022',
    title: 'Bachelor of Technology in Mechatronics Engineering',
    organization: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2018 - 2022',
    type: 'education',
    description: 'Comprehensive study of mechatronics engineering with focus on embedded systems, IIoT, smart systems, and automation systems. Coursework emphasized the integration of mechanical, electrical, and computer engineering.',
    skills: ['Mechatronics', 'Embedded Systems', 'IIoT', 'Smart Systems', 'Automation Systems', 'Control Engineering', 'Robotics'],
    achievements: [
      'Graduated with GPA: 3.68/4.0',
      'Specialized in Embedded Systems and IIoT',
      'Completed projects in automation and smart systems',
      'Gained hands-on experience in control engineering and robotics'
    ]
  }
];


