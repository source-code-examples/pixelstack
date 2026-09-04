/**
 * Frontend skillset used in the Profile page.
 * Each entry represents a skill label, a proficiency level (0–100),
 * and an animation delay for the SkillBar component.
 */
export const frontendSkills = [
  {
    label: 'React.js • React Router • Redux / Redux Toolkit',
    level: 85,
    delay: 0.2,
  },
  {
    label: 'Vue.js ',
    level: 50,
    delay: 0.8,
  },
  { label: 'Next.js', level: 75, delay: 0.4 },
  { label: 'JavaScript', level: 85, delay: 0.6 },
  { label: 'TypeScript', level: 75, delay: 0.8 },
  {
    label: 'CSS • Tailwind CSS • Bootstrap • Animations',
    level: 90,
    delay: 1.0,
  },
  { label: 'UX/UI • Responsive Design • Figma', level: 85, delay: 1.2 },
]

/**
 * Backend skillset used in the Profile page.
 */
export const backendSkills = [
  { label: 'Node.js • Express.js', level: 80, delay: 0.2 },
  {
    label: 'Java • Spring Boot • Spring Data JPA',
    level: 60,
    delay: 0.4,
  },
  { label: 'Python • Flask • Django', level: 50, delay: 0.6 },
  {
    label: 'Databases (MongoDB • Prisma • Supabase • PostgreSQL • MySQL • SQL)',
    level: 70,
    delay: 0.8,
  },
  { label: 'JSON • HTTP • REST APIs', level: 75, delay: 1.0 },
  { label: 'Testing • Debugging', level: 65, delay: 1.2 },
  { label: 'Cloud (AWS) • Docker • Microservices', level: 50, delay: 1.6 },
  {
    label: 'AI Integration • OpenAI API • Prompt Engineering • LangChain • RAG',
    level: 70,
    delay: 1.8,
  },
]

/**
 * Complete skill list shown in the "View full skill set" modal
 * Structured by categories
 */
export const fullSkillSet = [
  {
    category: 'Programming Languages',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'SQL',
      'Java',
      'Python',
    ],
  },
  {
    category: 'Frontend Frameworks & Libraries',
    skills: [
      'React.js',
      'Redux Toolkit',
      'React Router',
      'Next.js',
      'vue.js',
      'Bootstrap',
      'Tailwind CSS',
      'Chakra UI',
      'Ant Design',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend Frameworks',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'Flask'],
  },
  {
    category: 'API & Testing',
    skills: [
      'RESTful APIs',
      'JWT',
      'Postman',
      'Unit Testing',
      'Integration Testing',
      'Debugging',
    ],
  },
  {
    category: 'DevOps, Cloud & Deployment',
    skills: [
      'Docker',
      'Serverless Computing',
      'Microservices Architecture',
      'AWS Cloud Basics',
      'CI/CD Pipelines',
      'GitHub Actions',
      'Vercel',
      'Render',
      'Netlify',
      'Cloudflare Pages',
      'GitHub Pages',
    ],
  },
  {
    category: 'Build Tools, Editors & Development',
    skills: [
      'Git & GitHub',
      'CLI',
      'VS Code',
      'IntelliJ IDEA',
      'Vite',
      'Webpack',
      'Babel',
      'ESLint',
      'npm',
      'yarn',
    ],
  },
  {
    category: 'Design, CSS & Tools',
    skills: [
      'Responsive Web Design',
      'CSS Flexbox & Grid',
      'CSS Variables & Animations',
      'UX/UI Design',
      'Figma (Wireframing, Prototyping, Mockups)',
    ],
  },
  {
    category: 'AI & Intelligent Systems',
    skills: [
      'OpenAI API',
      'OpenAI-compatible APIs',
      'LLM Integration',
      'Prompt Engineering',
      'Tool/Function Calling',
      'LangChain',
      'LangGraph',
      'RAG',
      'Embeddings',
      'Semantic Search',
      'Vector Databases',
      'Pinecone',
      'Hugging Face',
      'LLMOps',
      'Chatbot Development',
      'AI Agents',
    ],
  },
  {
    category: 'Databases & Data Management',
    skills: [
      'MongoDB (NoSQL)',
      'Prisma ORM',
      'Supabase',
      'PostgreSQL',
      'MySQL',
      'Spring Data JPA (ORM)',
      'Database Design',
    ],
  },
]
