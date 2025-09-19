export interface Industry {
  name: string;
  description: string;
  valuePropositions: string[];
  keyTechnologies: string[];
  caseStudies: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    name: "Automotive & EV Manufacturing",
    description: "Transforming automotive production through advanced automation, robotics integration, and predictive maintenance solutions.",
    valuePropositions: [
      "Fixture optimization for Vida Electric Vehicle manufacturing",
      "Robotics integration with 15% efficiency boost",
      "Predictive maintenance reducing downtime by 83%",
      "TPM/OEE optimization for cost per vehicle reduction",
      "SAP MRP digitization for demand forecasting"
    ],
    keyTechnologies: [
      "PLC/HMI Automation",
      "IoT Smart Manufacturing",
      "Predictive Analytics",
      "Robotic Welding Systems",
      "SAP ERP Integration"
    ],
    caseStudies: [
      "Hero MotoCorp - ₹28 per EV cost reduction",
      "Vida Electric Vehicle production optimization",
      "Robotic welding system efficiency improvement"
    ],
    icon: "🚗"
  },
  {
    name: "Industrial Automation & Robotics",
    description: "Enabling intelligent automation through PLC/HMI design, control system tuning, and IoT dashboard development.",
    valuePropositions: [
      "PLC/HMI design for complex automation systems",
      "Control system tuning and optimization",
      "IoT dashboards with real-time monitoring",
      "Ladder logic programming for safety systems",
      "MATLAB/Simio models for system simulation"
    ],
    keyTechnologies: [
      "Siemens TIA Portal",
      "GX Works",
      "Ladder Logic",
      "Control Systems",
      "IoT Integration"
    ],
    caseStudies: [
      "EDM Controllers Study - 15-20% precision improvement",
      "Elevator PLC Simulation - Real-time safety control",
      "Mano-AI - CNC & Robotics troubleshooting"
    ],
    icon: "🤖"
  },
  {
    name: "Supply Chain & Operations",
    description: "Optimizing supply chain operations through blockchain transparency, JIT inventory management, and MRP optimization.",
    valuePropositions: [
      "Blockchain transparency increasing accountability by 15%",
      "JIT inventory planning and optimization",
      "MRP optimization for resource risk mitigation",
      "Supplier negotiation and demand forecasting",
      "Supply chain efficiency contributing to ₹9M annual savings"
    ],
    keyTechnologies: [
      "Blockchain Technology",
      "Smart Contracts",
      "SAP MRP",
      "Inventory Management",
      "Demand Forecasting"
    ],
    caseStudies: [
      "Schneider Electric - Blockchain supply chain solution",
      "Hero MotoCorp - Supply chain digitization",
      "Inventory optimization and cost reduction"
    ],
    icon: "📦"
  },
  {
    name: "Quality Engineering & R&D",
    description: "Advancing quality engineering through GD&T expertise, precision measurement tools, and comprehensive failure analysis.",
    valuePropositions: [
      "GD&T expertise for precision manufacturing",
      "CMM and precision measurement tools",
      "Defect analysis and failure analysis",
      "FMEA and process capability studies",
      "Quality control systems implementation"
    ],
    keyTechnologies: [
      "GD&T",
      "CMM",
      "FMEA",
      "Process Capability Studies",
      "Quality Control Systems"
    ],
    caseStudies: [
      "Manufacturing line optimization - Quality improvement",
      "EDM Controllers Study - Precision enhancement",
      "TPM implementation for quality assurance"
    ],
    icon: "📊"
  },
  {
    name: "Digital Transformation & Smart Manufacturing",
    description: "Leading digital transformation initiatives through AI-driven dashboards, LLM workflows, and Industry 4.0 integration.",
    valuePropositions: [
      "AI-driven dashboards for real-time insights",
      "LLM workflows for troubleshooting automation",
      "Industry 4.0 integration and implementation",
      "Digital manufacturing process optimization",
      "Smart manufacturing cell development"
    ],
    keyTechnologies: [
      "AI/ML Integration",
      "LLM Agentic Workflows",
      "Industry 4.0",
      "Digital Manufacturing",
      "Smart Systems"
    ],
    caseStudies: [
      "IoT Smart Cell Dashboard development",
      "Mano-AI - AI-powered troubleshooting",
      "Digital manufacturing optimization"
    ],
    icon: "🔄"
  },
  {
    name: "AI/Tech Innovation",
    description: "Pioneering AI innovation through open-source solutions, Dockerized manufacturing AI, and advanced predictive analytics.",
    valuePropositions: [
      "Open-source AI solutions (Mano-AI)",
      "Dockerized manufacturing AI deployment",
      "Predictive analytics for maintenance optimization",
      "LLM agentic workflows for automation",
      "Real-time data analysis and insights"
    ],
    keyTechnologies: [
      "Llama 3b AI Models",
      "Python Programming",
      "Docker Containerization",
      "Predictive Analytics",
      "Real-time Data Processing"
    ],
    caseStudies: [
      "Mano-AI - CLI AI model for CNC troubleshooting",
      "Manufacturing optimization with AI integration",
      "Predictive maintenance implementation"
    ],
    icon: "🧠"
  }
];

export interface ImpactHighlight {
  metric: string;
  value: string;
  description: string;
  category: string;
}

export const impactHighlights: ImpactHighlight[] = [
  {
    metric: "Annual Cost Savings",
    value: "₹9M",
    description: "Hero MotoCorp savings through supply chain efficiency and lean initiatives",
    category: "Financial Impact"
  },
  {
    metric: "Downtime Reduction",
    value: "83%",
    description: "Reduction in unplanned downtime through predictive maintenance implementation",
    category: "Operational Excellence"
  },
  {
    metric: "CNC Machine Availability",
    value: "+11%",
    description: "Improvement in machine availability through IoT-enabled Smart Cell Dashboard",
    category: "Equipment Performance"
  },
  {
    metric: "EV Production Throughput",
    value: "+15%",
    description: "Increase in electric vehicle production throughput through optimization",
    category: "Production Efficiency"
  },
  {
    metric: "OEE Improvement",
    value: "+40%",
    description: "Overall Equipment Effectiveness improvement via DMS initiatives",
    category: "Manufacturing Excellence"
  },
  {
    metric: "Cost Per Vehicle",
    value: "₹28/EV",
    description: "Cost reduction per electric vehicle through tool optimization",
    category: "Cost Optimization"
  },
  {
    metric: "Cycle Time Reduction",
    value: "20%",
    description: "Manufacturing line cycle time reduction through IoT and simulation",
    category: "Process Optimization"
  },
  {
    metric: "WIP Increase",
    value: "2000 units",
    description: "Work-in-progress increase through improved manufacturing line optimization",
    category: "Capacity Enhancement"
  },
  {
    metric: "Precision Improvement",
    value: "15-20%",
    description: "EDM controller precision improvement through advanced control strategies",
    category: "Quality Enhancement"
  },
  {
    metric: "Transparency Improvement",
    value: "15%",
    description: "Supply chain transparency and accountability improvement through blockchain",
    category: "Supply Chain Excellence"
  }
];

