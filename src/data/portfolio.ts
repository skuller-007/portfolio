export interface PortfolioSection {
  title: string;
  content: string;
  type: 'statement' | 'cta' | 'highlight';
}

export const portfolioSections: PortfolioSection[] = [
  {
    title: "Value Proposition",
    type: 'statement',
    content: "Ajith blends engineering rigor, automation expertise, lean supply chain methods, and AI innovation to deliver scalable, cost-saving, and efficiency-driven solutions that transform traditional industries into intelligent, data-driven operations. With proven experience in manufacturing excellence, predictive analytics, and digital transformation, I bring a unique combination of technical depth and practical implementation skills that drive measurable business results."
  },
  {
    title: "Call to Action",
    type: 'cta',
    content: "Available for collaboration in manufacturing innovation, supply chain transformation, and AI-driven operations. Let's discuss how we can work together to revolutionize your manufacturing processes, optimize your supply chain, and implement cutting-edge AI solutions that deliver tangible business value."
  },
  {
    title: "Key Differentiators",
    type: 'highlight',
    content: "• Proven track record of delivering ₹9M+ in annual savings through manufacturing optimization\n• Expertise in bridging traditional manufacturing with Industry 4.0 technologies\n• Unique combination of hands-on manufacturing experience and advanced AI/ML knowledge\n• Strong academic foundation with practical industry application\n• Cross-functional leadership experience in complex manufacturing environments"
  }
];

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  preferredContact: string;
  timezone: string;
}

export const contactInfo: ContactInfo = {
  email: "ajith.srikanth@northeastern.edu",
  phone: "+1 (617) 555-0123",
  location: "Boston, MA | Chennai, India",
  availability: "Available for full-time opportunities starting May 2026",
  preferredContact: "Email preferred for initial contact",
  timezone: "EST (UTC-5) | IST (UTC+5:30)"
};

export interface PortfolioLinks {
  linkedin: string;
  github: string;
  researchgate: string;
  portfolio: string;
  resume: string;
}

export const portfolioLinks: PortfolioLinks = {
  linkedin: "https://linkedin.com/in/as31",
  github: "https://github.com/ajithsrikanth",
  researchgate: "https://researchgate.net/profile/ajith-srikanth",
  portfolio: "https://ajithsrikanth.dev",
  resume: "/content/resume/Ajith_Srikanth_Resume.pdf"
};

