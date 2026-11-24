export const profile = {
  name: 'Karthik Anaboina',
  roles: 'MERN Full Stack Developer | AI Enthusiast',
  intro:
    'MERN full stack developer with hands-on internship experience at Digi Delight, where I worked on a real-time chatbot project using webhooks and WebSockets. Passionionate about building complete web applications and exploring Generative AI, RAG and Agentic AI.',
  about:
    'I am a MERN full stack developer with internship experience at Digi Delight, where I worked on a real-time chatbot project using webhooks and WebSockets. I enjoy building end-to-end web applications across the MongoDB, Express, React and Node stack, and I am continuously learning new technologies. My current learning interests include Generative AI, RAG, AI Agents and Agentic AI.',
  email: 'anaboinaKarthik5555@gmail.com',
  phone: '+91 7981978702',
  location: 'Hyderabad, Telangana, India',
  // Placeholders: set these to real URLs when available. Empty values render as "coming soon".
  github: '',
  linkedin: '',
  resumeUrl: '/Karthik-Anaboina-Resume.pdf',
  photoUrl: '/karthik.svg',
};

export type Proficiency = 'Currently Learning' | 'Familiar With' | 'Practiced';

export const proficiencyStyles: Record<Proficiency, { dot: string; legend: string }> = {
  Practiced: { dot: 'bg-emerald-400', legend: 'Practiced' },
  'Familiar With': { dot: 'bg-sky-400', legend: 'Familiar With' },
  'Currently Learning': { dot: 'bg-amber-400', legend: 'Currently Learning' },
};

export interface SkillItem {
  name: string;
  level: Proficiency;
}

export interface SkillGroup {
  title: string;
  description?: string;
  skills: SkillItem[];
}

const P: Proficiency = 'Practiced';
const F: Proficiency = 'Familiar With';
const L: Proficiency = 'Currently Learning';

export const technicalSkills: SkillGroup[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: P },
      { name: 'CSS3', level: P },
      { name: 'JavaScript ES6+', level: P },
      { name: 'React.js', level: P },
      { name: 'Bootstrap', level: F },
      { name: 'jQuery', level: F },
      { name: 'Responsive Design', level: P },
      { name: 'Flexbox', level: P },
      { name: 'CSS Grid', level: P },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: F },
      { name: 'Express.js', level: F },
      { name: 'REST APIs', level: P },
      { name: 'API Authentication', level: F },
      { name: 'MongoDB', level: F },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: P },
      { name: 'GitHub', level: P },
      { name: 'Postman', level: P },
      { name: 'VS Code', level: P },
      { name: 'UI/UX Principles', level: F },
      { name: 'Prototyping', level: F },
    ],
  },
];

export const aiSkills: SkillGroup[] = [
  {
    title: 'Generative AI & LLMs',
    skills: [
      { name: 'Generative AI', level: L },
      { name: 'Large Language Models (LLMs)', level: L },
      { name: 'Prompt Engineering', level: L },
      { name: 'OpenAI API', level: L },
      { name: 'Google Gemini API', level: F },
      { name: 'Anthropic Claude API', level: F },
    ],
  },
  {
    title: 'Agentic AI',
    skills: [
      { name: 'Agentic AI', level: L },
      { name: 'AI Agents', level: L },
      { name: 'Multi-Agent Systems', level: L },
      { name: 'LangChain', level: L },
      { name: 'LangGraph', level: L },
      { name: 'CrewAI', level: F },
      { name: 'Model Context Protocol (MCP)', level: L },
      { name: 'AI Tool Calling', level: L },
    ],
  },
  {
    title: 'RAG & AI Knowledge Systems',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', level: L },
      { name: 'Vector Databases', level: L },
      { name: 'ChromaDB', level: L },
      { name: 'Pinecone', level: F },
      { name: 'Embeddings', level: L },
      { name: 'Semantic Search', level: L },
    ],
  },
  {
    title: 'AI Developer Tools',
    skills: [
      { name: 'ChatGPT', level: P },
      { name: 'Claude', level: P },
      { name: 'Cursor AI', level: P },
      { name: 'GitHub Copilot', level: F },
      { name: 'Hugging Face', level: F },
      { name: 'Ollama', level: F },
      { name: 'n8n AI Automation', level: L },
    ],
  },
  {
    title: 'AI Engineering',
    skills: [
      { name: 'Python', level: L },
      { name: 'FastAPI', level: L },
      { name: 'REST API Integration', level: P },
      { name: 'Docker', level: F },
      { name: 'AWS Basics', level: F },
      { name: 'AI Evaluation and Testing', level: L },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Digi Delight Chatbot (Internship Project)',
    description:
      'Real-time chatbot built during my frontend internship at Digi Delight. Built the chat UI and integrated webhooks and WebSockets for live two-way messaging between users and the bot.',
    stack: ['React.js', 'JavaScript', 'WebSockets', 'Webhooks'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio website showcasing my technical skills and projects with a responsive layout and smooth navigation.',
    stack: ['React.js', 'CSS', 'Responsive Design'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    title: 'Jobby App',
    description:
      'Job portal where users log in, browse job listings, filter by employment type and salary range, and view detailed job descriptions. Includes protected routes and JWT authentication.',
    stack: ['React.js', 'React Router', 'REST APIs', 'CSS', 'JWT Authentication'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    title: 'Password Manager',
    description:
      'Client-side password manager with add, delete, search and password masking/unmasking functionality.',
    stack: ['React.js', 'useState', 'useEffect', 'Local Storage'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    title: 'IPL Dashboard App',
    description:
      'Displays IPL match details, recent matches, team-specific dashboards and match summaries using API integration.',
    stack: ['React.js', 'REST API', 'JavaScript', 'CSS'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    title: 'Blog Application',
    description:
      'Full-stack blog application supporting CRUD operations to create, read, update and delete blog posts.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    repoUrl: '',
    demoUrl: '',
  },
];

export interface AIProject {
  title: string;
  description: string;
  stack: string[];
}

export const aiProjects: AIProject[] = [
  {
    title: 'AI Resume Chatbot',
    description:
      'Upload PDF documents and ask questions. Uses RAG to retrieve the relevant information before the model answers.',
    stack: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB'],
  },
  {
    title: 'Agentic AI Assistant',
    description:
      'An assistant that plans tasks and uses tools and APIs to execute multi-step workflows.',
    stack: ['Python', 'LangGraph', 'LLM APIs', 'MCP'],
  },
  {
    title: 'AI Workflow Automation',
    description:
      'Automates lead generation and email notifications with AI-powered workflows, webhooks and REST APIs.',
    stack: ['n8n', 'AI APIs', 'REST APIs'],
  },
];

export const experience = [
  {
    role: 'Frontend Developer (UI Developer) Intern',
    company: 'Digi Delight',
    description:
      'Worked as a frontend developer building user interfaces for a real-time chatbot project. Used webhooks and WebSockets for live messaging between users and the chatbot.',
  },
];

export const education = [
  { degree: 'B.Com (Tax)', school: 'Siva Sivani Degree College, Kompally' },
  { degree: 'Intermediate (MEC)', school: 'Siva Sivani Junior College, Kompally' },
  { degree: 'SSC', school: 'Cyber Age Pupils High School, Medchal' },
];

export const interests = [
  { label: 'College-level Chess Competition Certificate', icon: 'trophy' },
  { label: 'Cricket', icon: 'activity' },
  { label: 'Reading Books', icon: 'book' },
  { label: 'Cooking', icon: 'chef' },
] as const;
