export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
  description?: string;
}

export const skills: SkillCategory[] = [
  {
    name: "Manufacturing Excellence",
    skills: [
      { name: "Operational Excellence", level: 5, description: "TPM, Kaizen, DMS, Lean Methodology, OEE optimization", icon: "🏭" },
      { name: "Process Improvement", level: 5, description: "Advanced Manufacturing, Process Design, Digital Manufacturing", icon: "⚙️" },
      { name: "Quality Engineering", level: 4, description: "GD&T, CMM, FMEA, Process Capability Studies", icon: "📊" },
      { name: "Supply Chain Optimization", level: 4, description: "Inventory Planning, JIT, Blockchain Transparency", icon: "🔗" }
    ]
  },
  {
    name: "Automation & Systems",
    skills: [
      { name: "PLC & HMI Programming", level: 5, description: "Siemens TIA, GX Works, Ladder Logic, Control Systems", icon: "🤖" },
      { name: "Industrial Software", level: 4, description: "MATLAB, Simio, SolidWorks, AutoCAD, SAP ERP", icon: "💻" },
      { name: "IoT & Smart Systems", level: 4, description: "Embedded Systems, IIoT, Smart Manufacturing", icon: "🌐" },
      { name: "Control Design", level: 4, description: "PID Loop Tuning, Control Design, Real-time Systems", icon: "🎛️" }
    ]
  },
  {
    name: "Mechatronics & R&D",
    skills: [
      { name: "Embedded Systems", level: 4, description: "Arduino/Raspberry Pi, PCB rework, Microcontrollers", icon: "🔌" },
      { name: "Debugging & Troubleshooting", level: 5, description: "System Integration, Root Cause Analysis", icon: "🔧" },
      { name: "Prototyping", level: 4, description: "Rapid Prototyping, Testing, Validation", icon: "🧪" },
      { name: "Research Methods", level: 4, description: "Experimental Design, Data Collection, Analysis", icon: "🔬" }
    ]
  },
  {
    name: "Data & AI",
    skills: [
      { name: "Python Programming", level: 4, description: "Data Analysis, Automation, Predictive Analytics", icon: "🐍" },
      { name: "LLM & AI Integration", level: 4, description: "Agentic Workflows, Prompt Engineering, AI Models", icon: "🧠" },
      { name: "Predictive Analytics", level: 4, description: "SAP Data Analysis, Root Cause Analysis, Forecasting", icon: "📈" },
      { name: "Machine Learning", level: 3, description: "Model Development, Training, Deployment", icon: "🤖" }
    ]
  },
  {
    name: "Leadership & Collaboration",
    skills: [
      { name: "Cross-functional Leadership", level: 4, description: "Team Management, Stakeholder Communication", icon: "👥" },
      { name: "Project Management", level: 4, description: "Agile Methodologies, Resource Planning, Risk Management", icon: "📋" },
      { name: "Problem Solving", level: 5, description: "Analytical Thinking, Creative Solutions, Innovation", icon: "💡" },
      { name: "Communication", level: 4, description: "Technical Writing, Presentations, Documentation", icon: "📝" }
    ]
  },
  {
    name: "Industry Applications",
    skills: [
      { name: "Automotive & EV Manufacturing", level: 5, description: "Fixture optimization, robotics integration, TPM/OEE", icon: "🚗" },
      { name: "Industrial Automation", level: 4, description: "PLC/HMI design, control systems, IoT dashboards", icon: "🏭" },
      { name: "Supply Chain & Operations", level: 4, description: "Blockchain transparency, JIT inventory, MRP optimization", icon: "📦" },
      { name: "Digital Transformation", level: 4, description: "AI-driven dashboards, Industry 4.0 integration", icon: "🔄" }
    ]
  }
];


