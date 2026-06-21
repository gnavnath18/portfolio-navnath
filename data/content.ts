export const site = {
  name: "Navnath Gite",
  tagline: "Backend Developer | Databricks Certified GenAI Engineer | Python Trainer",
  url: "https://navnathgite.dev",
  email: "gitenavnath18@gmail.com",
  location: "India",
  social: {
    github: "https://github.com/gnavnath18",
    linkedin: "https://www.linkedin.com/in/navnath-gite-b764791b8",
  },
};

export const education = {
  degree: "Bachelor of Engineering, Computer Engineering",
  school: "AISSMS College of Engineering",
  score: "8.23 CGPA",
};

export const stats = [
  { label: "Projects completed", value: 15, suffix: "+" },
  { label: "Technologies learned", value: 20, suffix: "+" },
  { label: "Problem-solving mindset", value: 100, suffix: "%" },
  { label: "Continuous learner", value: 24, suffix: "/7" },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "C++", level: 85 },
      { name: "Java", level: 70 },
      { name: "Go (Basic)", level: 40 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "SQLAlchemy", level: 85 },
      { name: "Alembic", level: 85 },
      { name: "Pydantic", level: 88 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "ChromaDB", level: 80 },
      { name: "Pinecone", level: 78 },
    ],
  },
  {
    title: "Machine Learning & GenAI",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Deep Learning", level: 78 },
      { name: "GenAI", level: 85 },
      { name: "LangChain", level: 84 },
      { name: "Prompt Engineering", level: 87 },
      { name: "RAG Systems", level: 88 },
    ],
  },
];

export const projects = [
  {
    id: "solar-fault-detection",
    title: "Solar Panel Fault Detection Using Deep Learning",
    description:
      "A deep learning system that detects and classifies solar panel faults from image data, improving energy efficiency and predictive maintenance. Achieved 90%+ accuracy through data augmentation and fine-tuning.",
    tags: ["Deep Learning", "Image Classification", "CNN Models", "Performance Evaluation"],
    image: "/images/project-solar.svg",
    featured: true,
  },
  {
    id: "rag-query-resolver",
    title: "RAG-Based Query Resolver",
    description:
      "Handles industry documents of every kind and resolves queries against retrieved, relevant context. Documents are stored using semantic chunking so the system preserves meaning across long, technical content.",
    tags: ["RAG", "LangChain", "Vector Search", "Semantic Chunking"],
    image: "/images/project-rag.svg",
    featured: true,
  },

];

export const services = [
  {
    title: "Backend API Development",
    description: "FastAPI, SQLAlchemy, PostgreSQL and REST APIs built for production.",
    icon: "Server",
  },
  {
    title: "AI & RAG Applications",
    description: "LangChain, vector databases and LLM-powered applications.",
    icon: "Sparkles",
  },
  {
    title: "Python Automation",
    description: "Scripts and workflow automation that remove repetitive work.",
    icon: "Workflow",
  },
  {
    title: "Machine Learning Projects",
    description: "Classification, prediction and deep learning solutions.",
    icon: "BrainCircuit",
  },
  {
    title: "Python Training",
    description: "Teaching Python programming and backend development.",
    icon: "GraduationCap",
  },
  {
    title: "Data Science Mentorship",
    description: "Helping students with ML and data analysis projects.",
    icon: "Compass",
  },
];

export const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Founder, ScaleStack",
    avatar: "/images/avatar-1.svg",
    quote:
      "Navnath rebuilt our API layer from scratch and cut response times by half. He explains tradeoffs clearly and ships on time.",
  },
  {
    name: "Daniel Foster",
    role: "CTO, ClearPath Analytics",
    avatar: "/images/avatar-2.svg",
    quote:
      "Our RAG pipeline was returning irrelevant results before Navnath restructured the chunking and retrieval logic. Genuinely sharp engineer.",
  },
  {
    name: "Priya Menon",
    role: "Student, Data Science Cohort",
    avatar: "/images/avatar-3.svg",
    quote:
      "He's the rare trainer who can debug your code live and explain why it broke. My FastAPI projects finally make sense.",
  },
];

export const experience = [
    {
    year: "2026",
    title: "Databricks Certified Generative AI Engineer Associate",
    description:
      "Earned Databricks' GenAI Engineer Associate certification, validating applied skills in building and evaluating LLM-powered systems.",
  },
    {
    year: "Jan 2026-Present",
    title: "Associate Software Developer, Tudip Technologies",
    description: "Started professional journey with Tudip.",
  },

  {
    year: "2025",
    title: "RAG & LLM Systems Focus",
    description:
      "Shifted focus toward retrieval-augmented generation, vector databases and prompt engineering for production use cases.",
  },
   {
    year: "2025",
    title: "Graduated, AISSMS COE",
    description: "Graduated with 8.23 CGPA.Ready for professional journey",
  },
  {
    year: "2024",
    title: "Backend Specialization",
    description:
      "Deepened FastAPI, SQLAlchemy and PostgreSQL expertise while shipping backend systems for freelance clients.",
  },
  {
    year: "2022",
    title: "Computer Engineering, AISSMS COE",
    description: "Building a foundation in algorithms,Databases and applied ML.",
  },
];

export const techStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "LangChain",
  "Pinecone",
  "ChromaDB",
  "Docker",
  "Git",
  "PyTorch",
  "Databricks",
  "SQLAlchemy",
];

export const blogPosts = [
  {
    title: "Building Production APIs with FastAPI",
    excerpt: "Patterns for structuring routers, dependencies and background tasks that scale past the demo stage.",
    slug: "building-production-apis-with-fastapi",
    date: "2026-04-12",
  },
  {
    title: "RAG Systems Explained",
    excerpt: "A practical walkthrough of chunking, embeddings and retrieval that actually return the right answer.",
    slug: "rag-systems-explained",
    date: "2026-03-02",
  },
  {
    title: "LangChain for Beginners",
    excerpt: "The core abstractions in LangChain, and which ones are worth learning first.",
    slug: "langchain-for-beginners",
    date: "2026-02-18",
  },
  {
    title: "Python for Backend Developers",
    excerpt: "Moving from scripts to services: typing, project structure and testing habits that pay off.",
    slug: "python-for-backend-developers",
    date: "2026-01-22",
  },
  {
    title: "Deep Learning Fundamentals",
    excerpt: "Notes on the concepts that kept coming up while building the solar fault detection model.",
    slug: "deep-learning-fundamentals",
    date: "2025-12-08",
  },
];

export const certifications = [
  {
    title: "Databricks Certified Generative AI Engineer Associate",
    issuer: "Databricks",
    issued: "May 23, 2026",
    expires: "May 23, 2028",
    credentialId: "183220983",
    image: "/images/databricks-cert.png",
  },
];
