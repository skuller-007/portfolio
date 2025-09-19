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
      { name: "TPM Methodology", level: 8, description: "JIPM-trained, TPM Special Award recipient, 83% downtime reduction achieved", icon: "🏭" },
      { name: "Six Sigma DMAIC", level: 7, description: "Yellow Belt certified, multiple projects, ₹9M+ cost savings", icon: "⚙️" },
      { name: "Lean Manufacturing", level: 7, description: "Extensive Skillsoft training, Kaizen implementation, 20% cycle time improvement", icon: "📊" },
      { name: "Process Improvement", level: 6, description: "Advanced Manufacturing, Process Design, Digital Manufacturing", icon: "🔗" }
    ]
  },
  {
    name: "Enterprise Systems",
    skills: [
      { name: "SAP ERP", level: 8, description: "MRP optimization, PM scheduling, 2+ years experience at Hero MotoCorp", icon: "🏢" },
      { name: "Simio Simulation", level: 7, description: "Teaching-level expertise, Course Assistant at Northeastern University", icon: "💻" },
      { name: "SCADA Systems", level: 6, description: "Hero MotoCorp implementation and operation, real-time monitoring", icon: "🌐" },
      { name: "MATLAB/Simulink", level: 8, description: "Research publications, control system design, EDM controller studies", icon: "🎛️" }
    ]
  },
  {
    name: "Automation & Systems",
    skills: [
      { name: "PLC & HMI Programming", level: 7, description: "Siemens TIA, GX Works, Ladder Logic, 15% efficiency boost achieved", icon: "🤖" },
      { name: "Industrial Software", level: 6, description: "SolidWorks, AutoCAD, SAP ERP integration", icon: "💻" },
      { name: "IoT & Smart Systems", level: 6, description: "Smart Cell Dashboard, 11% availability improvement", icon: "🌐" },
      { name: "Control Design", level: 7, description: "PID Loop Tuning, LQR Control, 15-20% precision improvement", icon: "🎛️" }
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


