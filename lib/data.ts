export const profile = {
  name: "Deepala Nithish",
  title: "Software Engineer · Software Engineer",
  location: "Bangalore, India",
  email: "nithishdeepala@gmail.com",
  phone: "+91 9247791415",
  github: "https://github.com/nithish9652",
  linkedin:
    "https://www.linkedin.com/in/nithish-deepala-b7b3a525a",
  leetcode: "https://leetcode.com/u/DeepalaNithish/",
  codechef: "https://www.codechef.com/users/ntihish9652",
  codeforces: "https://codeforces.com/profile/devil_hydra_09",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/nithishdeepala/",
  resumeUrl: "#",
  summary:
    "Information Technology undergraduate at IIIT Lucknow building data-driven full-stack products. I blend clean engineering with analytical thinking to ship things people actually use.",
};

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "DeepalaNithish",
    url: "https://leetcode.com/u/DeepalaNithish/",
  },
  {
    name: "CodeChef",
    handle: "ntihish9652",
    url: "https://www.codechef.com/users/ntihish9652",
  },
  {
    name: "Codeforces",
    handle: "devil_hydra_09",
    url: "https://codeforces.com/profile/devil_hydra_09",
  },
  {
    name: "GeeksforGeeks",
    handle: "nithishdeepala",
    url: "https://www.geeksforgeeks.org/user/nithishdeepala/",
  },
  {
    name: "GitHub",
    handle: "nithish9652",
    url: "https://github.com/nithish9652",
  },
];

export const stats = [
  { label: "CGPA at IIIT Lucknow", value: "8.5" },
  { label: "DSA problems solved", value: "1000+" },
  { label: "CodeChef max rating", value: "2008" },
  { label: "Graduation", value: "2026" },
];

export const experience = [
  {
    company: "Flipkart",
    role: "Software Development Engineer (Internship) ’26",
    location: "Bangalore, India",
    period: "Jan 2026 — Present",
    highlights: [
      "Developed machine learning models using Python and Scikit-learn to predict high-risk deliveries and detect anomalies across large-scale logistics workflows.",
      "Built scalable data preprocessing and feature engineering pipelines using Python and SQL to process millions of customer support and shipment records efficiently.",
      "Automated issue detection workflows using LLM-based summarization and NLP pipelines for analyzing product reviews, support tickets, and agent interaction logs.",
      "Improved operational efficiency by integrating ML-driven prediction and automation systems into internal monitoring and analytics tools.",
    ],
    tags: ["Python", "Scikit-learn", "SQL", "LLM", "NLP", "Analytics"],
  },
];

export const projects = [
  {
    name: "ParkAndRide",
    tagline: "Full-stack parking reservation platform",
    description:
      "A reservation system for metro parking lots with hourly, daily, and monthly bookings, real-time occupancy, dynamic pricing via a sigmoid demand model, and Stripe payments. Live on AWS EC2.",
    stack: [
      "Node.js",
      "Next.js",
      "MongoDB",
      "Redis",
      "Stripe",
      "AWS EC2",
      "JWT",
    ],
    highlights: [
      "Improved slot allocation accuracy by 35%.",
      "Dynamic pricing engine based on peak/off-peak demand.",
      "JWT-secured REST APIs with Redis-backed caching.",
      "Tiered cancellation policy with full test coverage.",
    ],
    accent: "from-cyan-300/70 via-sky-400/40 to-transparent",
    repo: "https://github.com/Nithish9652/ParkandRide",
    live: "https://park-and-ride-nine.vercel.app/",
  },
  {
    name: "AURA WELL",
    tagline: "AI-based facial skincare recommendation",
    description:
      "A full-stack web app that analyzes facial skin images and user inputs through ML models to return personalized skincare recommendations with a polished Material UI experience.",
    stack: ["Python", "Flask", "React", "Material UI", "ML"],
    highlights: [
      "Webcam capture + interactive intake form on the frontend.",
      "Flask backend performing skin tone & concern analysis.",
      "Recommendation engine tuned for personalization.",
      "Responsive, accessible, and smooth UX.",
    ],
    accent: "from-fuchsia-300/70 via-violet-400/40 to-transparent",
    repo: "https://github.com/Nithish9652/Aurawell",
    live: null as string | null,
  },
];

export const achievements = [
  "Expert on Codeforces, Knight on LeetCode, 5-Star (2008 max) on CodeChef.",
  "Global Rank 719 / 30k and multiple sub-1300 finishes on Codeforces.",
  "Global Rank 23 / 20k on CodeChef contests.",
  "Institute Rank 18 and 5-Star (2010) on GeeksforGeeks · Global Rank 246.",
  "1,000+ DSA problems across LeetCode and GeeksforGeeks.",
  "Advanced C++ Certificate (CodeChef) · Google Cybersecurity Certificate (Coursera).",
];

export const education = [
  {
    school: "Indian Institute of Information Technology, Lucknow",
    degree: "B.Tech, Information Technology",
    period: "Nov 2022 — Jun 2026",
    score: "CGPA 8.5 / 10",
    note: "OS, Software Engineering, Computer Networks, ML, DSA, DBMS, OOPS.",
  },
  {
    school: "Sri Chaitanya College, Vijayawada",
    degree: "Intermediate (12th)",
    period: "Nov 2020 — Jul 2022",
    score: "79.4%",
  },
  {
    school: "Sri Chaitanya Techno School, Vijayawada",
    degree: "Secondary (10th)",
    period: "Jul 2019 — Apr 2020",
    score: "93.83%",
  },
];

export const skills = {
  Languages: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI"],
  Backend: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT"],
  Data: ["MongoDB", "MySQL", "Firebase", "Redis"],
  Cloud: ["AWS EC2", "Stripe", "Git", "Linux"],
  ML: ["Scikit-learn", "Feature Engineering", "Regression", "Analytics"],
};
