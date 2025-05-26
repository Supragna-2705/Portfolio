// Resume data to be used for downloads
export const resumeData = {
  personalInfo: {
    name: "Supragna Konakala",
    email: "supragnakonakala@gmail.com",
    phone: "+91 9963029541",
    location: "Hyderabad",
    linkedin: "www.linkedin.com/in/supragna-konakala-2a2247259",
    github: "github.com/Supragna-2705"
  },
  
  skills: {
    programming: ["Java", "C", "Python", "Data Structures and Algorithms", "SQL"],
    webTechnologies: ["HTML", "CSS", "JavaScript"],
    utilities: ["Git", "GitHub"],
    dataVisualization: ["Power BI"],
    software: ["VS Code"]
  },
  
  education: [
    {
      degree: "BTech, CSE(Data Science)",
      institution: "B V Raju Institute of Technology",
      period: "2022-2026",
      grade: "CGPA: 8.99/10"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya College",
      period: "2020-2022",
      grade: "Score: 98.2/100"
    },
    {
      degree: "SSC",
      institution: "Unique High School",
      period: "2019-2020",
      grade: "GPA: 10/10"
    }
  ],
  
  projects: [
    {
      title: "AI powered Virtual Neuro-therapist",
      description: "Developing a fully automated virtual neurotherapist that guides users through personalized therapeutic activities using AI-powered chatbot interactions.",
      technologies: ["React.js", "Node.js", "MySQL", "Hugging Face Transformers/spaCy", "TensorFlow/PyTorch"]
    },
    {
      title: "Responsive Energy Control Systems For Next-Gen Buildings",
      description: "Developed a Responsive Energy Control System (RECS) to optimize energy usage in buildings by dynamically adjusting consumption based on real-time environmental conditions.",
      technologies: ["Machine Learning (Gradient Boosting)", "Mixed Integer Linear Programming"]
    },
    {
      title: "Sudoku Solver",
      description: "Developed a Sudoku game in Python with a user-friendly interface for solving and generating puzzles.",
      technologies: ["Python", "NumPy"]
    }
  ],
  
  internships: [
    {
      title: "Swecha Summer of AI Virtual Internship",
      description: "Developed and enhanced expertise in designing, developing and evaluating an Automatic Speech Recognition model. Contributed to the collection of diverse Telugu audio and video samples.",
      technologies: ["AI", "Speech Recognition", "Data Collection"]
    }
  ],
  
  certifications: [
    "Oracle Academy in Java fundamentals and foundations",
    "NPTEL in programming languages like C, Java and Python",
    "SkillUp by Simplilearn in Programming with Python",
    "Google in AI-ML Virtual Internship"
  ],
  
  workshops: [
    "2 day workshop of Data visualization using PowerBI"
  ],
  
  achievements: [
    "Secured 10.0 in 10th grade",
    "Achieved 982/1000 in Intermediate"
  ],
  
  interests: [
    "Exploring AI and machine learning advancements",
    "Developing innovative tech solutions",
    "Continuous learning and solving complex technical challenges"
  ],
  
  aboutMe: "Aspiring Software Developer with a strong foundation in Data Structures and Algorithms, Full-Stack Development, and AI integration. Passionate about building scalable and efficient solutions while continuously exploring the intersection of software engineering and machine learning. Dedicated to writing clean, optimized, and maintainable code, eager to apply skills in real-world projects."
};

export const generateCSV = () => {
  const data = resumeData;
  let csvContent = "Category,Item,Details\n";
  
  // Personal Info
  for (const [key, value] of Object.entries(data.personalInfo)) {
    csvContent += `Personal Info,${key},${value}\n`;
  }
  
  // Skills
  for (const [category, skills] of Object.entries(data.skills)) {
    csvContent += `Skills,${category},${skills.join('; ')}\n`;
  }
  
  // Education
  data.education.forEach(edu => {
    csvContent += `Education,${edu.degree},${edu.institution}, ${edu.period}, ${edu.grade}\n`;
  });
  
  // Projects
  data.projects.forEach(project => {
    csvContent += `Project,${project.title},${project.description}, Technologies: ${project.technologies.join('; ')}\n`;
  });
  
  // Internships
  data.internships.forEach(internship => {
    csvContent += `Internship,${internship.title},${internship.description}\n`;
  });
  
  // Certifications
  data.certifications.forEach(cert => {
    csvContent += `Certification,${cert},\n`;
  });
  
  // Workshops
  data.workshops.forEach(workshop => {
    csvContent += `Workshop,${workshop},\n`;
  });
  
  // Achievements
  data.achievements.forEach(achievement => {
    csvContent += `Achievement,${achievement},\n`;
  });
  
  // Interests
  data.interests.forEach(interest => {
    csvContent += `Interest,${interest},\n`;
  });
  
  // About Me
  csvContent += `About,About Me,${data.aboutMe}\n`;
  
  return csvContent;
};

export const downloadResume = (format: 'pdf' | 'csv') => {
  if (format === 'csv') {
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'supragna_konakala_resume.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // For PDF, we would ideally have a PDF file to download
    // For now, we'll just redirect to the PDF file
    window.open('/resume.pdf', '_blank');
  }
};