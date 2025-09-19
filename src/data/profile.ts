// Auto-generated from resume parsing
export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Project {
  title: string;
  summary: string;
  tech: string[];
  impact?: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
}

export interface Writing {
  title: string;
  summary: string;
  url: string;
  tags?: string[];
  date?: string;
}

export interface Profile {
  name: string;
  title?: string;
  location?: string;
  email: string;
  linkedin: string;
  github: string;
  skills: { [group: string]: string[] };
  experience: Experience[];
  projects: Project[];
  writings: Writing[];
  certifications: string[];
}

export const profile: Profile = {
  "name": "Ajith Srikanth",
  "title": "Advanced Manufacturing Engineer",
  "location": "Boston, MA",
  "email": "ajithsrikanth.f@northeastern.edu",
  "linkedin": "https://linkedin.com/in/as31",
  "github": "https://github.com/skuller-007",
  "skills": {
    "Manufacturing Excellence": [
      "TPM",
      "Kaizen",
      "DMS",
      "Lean Methodology",
      "OEE optimization"
    ],
    "Automation & Systems": [
      "PLC/HMI Programming",
      "Siemens TIA",
      "GX Works",
      "Ladder Logic"
    ],
    "Mechatronics & R&D": [
      "Embedded Systems",
      "Arduino/Raspberry Pi",
      "PCB rework",
      "Microcontrollers"
    ],
    "Data & AI": [
      "Python Programming",
      "LLM & AI Integration",
      "Predictive Analytics"
    ],
    "Leadership & Collaboration": [
      "Cross-functional Leadership",
      "Project Management",
      "Problem Solving"
    ],
    "Industry Applications": [
      "Automotive & EV Manufacturing",
      "Industrial Automation",
      "Supply Chain & Operations"
    ]
  },
  "experience": [
    {
      "company": "Hero MotoCorp",
      "role": "Team Manager - Manufacturing Excellence",
      "location": "India",
      "start": "2022",
      "end": "2024",
      "bullets": [
        "Achieved 15% efficiency boost through PLC/HMI automation for robotic welding systems",
        "Implemented IoT-enabled Smart Cell Dashboard with Limble CMMS, gaining 11% availability improvement",
        "Reduced downtime by 83% through predictive maintenance implementation",
        "Achieved ₹28 per EV cost reduction (~$0.5/vehicle) through tool cost optimization",
        "Contributed to ₹9M annual savings through supply chain efficiency and lean initiatives"
      ]
    },
    {
      "company": "Bosch Rexroth",
      "role": "Engineering Intern - Fluid Power Systems",
      "location": "India",
      "start": "2019",
      "end": "2019",
      "bullets": [
        "Designed fluid power systems for automotive applications",
        "Integrated control systems with hydraulics for improved reliability",
        "Gained exposure to high-speed automation systems"
      ]
    },
    {
      "company": "TechSnap",
      "role": "Software Development Intern",
      "location": "Remote",
      "start": "2021",
      "end": "2021",
      "bullets": [
        "Developed modular Python applications for scalable projects",
        "Created reusable codebase architecture",
        "Implemented best practices for software development"
      ]
    }
  ],
  "projects": [
    {
      "title": "Optimization of Manufacturing Line - IoT Smart Cell & Simio Simulation",
      "summary": "Developed IoT-enabled Smart Cell Dashboard with Simio simulation modeling, achieving 20% cycle time reduction and 2000 units WIP increase through advanced manufacturing optimization.",
      "tech": [
        "IoT",
        "Simio",
        "MATLAB",
        "Python",
        "Predictive Analytics",
        "Smart Manufacturing"
      ],
      "impact": [
        "20% cycle time reduction",
        "2000 units WIP increase",
        "15% overall efficiency improvement",
        "30% reduction in unplanned downtime"
      ],
      "links": {
        "demo": "https://demo.manufacturing-optimization.com",
        "repo": "https://github.com/ajithsrikanth/manufacturing-optimization"
      }
    },
    {
      "title": "Mano-AI - CLI AI Model for CNC & Robotics Troubleshooting",
      "summary": "Developed a CLI-based AI model using Llama 3b for real-time troubleshooting of CNC machines and robotics systems, featuring Dockerized deployment and advanced data analysis capabilities.",
      "tech": [
        "Llama 3b",
        "Python",
        "Docker",
        "CLI",
        "AI/ML",
        "Real-time Data Analysis"
      ],
      "impact": [
        "75% reduction in troubleshooting time",
        "60% improvement in first-time fix rates",
        "40% decrease in unplanned downtime"
      ],
      "links": {
        "demo": "https://demo.mano-ai.com",
        "repo": "https://github.com/ajithsrikanth/mano-ai"
      }
    },
    {
      "title": "EDM Controllers Study - MATLAB Simulation Analysis",
      "summary": "Comprehensive MATLAB simulation study comparing Bang Bang, PID, and LQR control strategies for EDM (Electrical Discharge Machining) controllers, achieving 15-20% precision improvement.",
      "tech": [
        "MATLAB",
        "Control Systems",
        "Simulation",
        "PID Control",
        "LQR Control"
      ],
      "impact": [
        "15-20% precision improvement",
        "Superior performance in complex geometries",
        "Optimal results for standard machining operations"
      ],
      "links": {
        "demo": "https://demo.edm-controllers.com",
        "repo": "https://github.com/ajithsrikanth/edm-controllers"
      }
    }
  ],
  "writings": [
    {
      "title": "PLC Elevator Control System - Real-time Safety Implementation",
      "summary": "Research paper on implementing real-time safety and control systems for elevator operations using ladder logic programming.",
      "url": "/writings/plc-elevator-control",
      "tags": [
        "PLC",
        "Safety Systems",
        "Control Engineering"
      ],
      "date": "2021"
    },
    {
      "title": "EDM Controller Optimization - A Comparative Study",
      "summary": "Comprehensive analysis of control strategies for Electrical Discharge Machining systems, comparing traditional and modern approaches.",
      "url": "/writings/edm-controller-optimization",
      "tags": [
        "EDM",
        "Control Systems",
        "Manufacturing"
      ],
      "date": "2022"
    },
    {
      "title": "Portfolio Case Study - Manufacturing Innovation",
      "summary": "Detailed case study documenting the implementation of IoT and AI solutions in manufacturing environments.",
      "url": "/writings/portfolio-case-study",
      "tags": [
        "IoT",
        "AI",
        "Manufacturing",
        "Case Study"
      ],
      "date": "2024"
    }
  ],
  "certifications": [
    "Lean Six Sigma White Belt",
    "Lean Six Sigma Yellow Belt",
    "TPM Special Award",
    "Digital Manufacturing & Design Technology Specialization",
    "Prompt Engineering for ChatGPT",
    "AWS IoT Core Certification",
    "Siemens TIA Portal Advanced PLC Programming",
    "AI in the Workplace",
    "Microcontroller Programming & PCB Design",
    "Root Cause Analysis in Six Sigma"
  ]
};
