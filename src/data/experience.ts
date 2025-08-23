export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  location?: string;
  type: "work" | "leadership" | "volunteer";
  skills?: string[];
}

export const experience: Experience[] = [
  {
    year: "July 2025 - Present",
    title: "AI Engineer Intern",
    company: "Nomura Financial Services Pvt Ltd",
    description:
      "I'm building a virtual assistant studio that reduces RAG chatbot deployment from days to minutes. I've also delivered several other automation solutions to improve efficiency. My full-stack skills in React and Flask allow me to create intuitive applications powered by complex AI models.",
    location: "Mumbai",
    type: "leadership",
    skills: ["Langchain", "Python", "Flask", "Research"],
  },
  {
    year: "May 2024 - July 2024",
    title: "Full Stack Developer Intern",
    company: "Pacify Medical Technologies Pvt Ltd",
    description:
      "Developed a comprehensive ReactJS web application interface for medical image processing. Integrated a pre-trained Mask R-CNN model with a Flask backend deployed on Google Cloud Platform to calculate wound burn areas with 95% accuracy. Implemented real-time image analysis and reporting features.",
    location: "Remote",
    type: "work",
    skills: [
      "React",
      "Flask",
      "Machine Learning",
      "Google Cloud",
      "Computer Vision",
      "Python",
    ],
  },
];
