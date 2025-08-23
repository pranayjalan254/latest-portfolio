export interface Education {
  year: string;
  title: string;
  institution: string;
  description: string;
  location?: string;
  gpa?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Engineering in Electronics and Instrumentation",
    institution: "BITS Pilani, Pilani Campus",
    description:
      "Comprehensive engineering program covering IoT, Data Structures & Algorithms, Database Management, Microprocessors, Microelectronic Circuits, Analog and Digital VLSI Design, Control Systems, and Signal Processing.",
    location: "Rajasthan, India",
    achievements: [
      "President of Blockchain Club",
      "Multiple hackathon winner",
      "Open source contributor",
      "Technical lead for various projects",
    ],
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary Education (Science)",
    institution: "Vidyanidhi Jr. College of Science",
    description:
      "Specialized in Science stream with focus on Mathematics, Physics, Chemistry, and Electronics. Strong foundation in analytical thinking and problem-solving.",
    location: "Maharashtra, India",
    achievements: [
      "Top 5% in state board examinations",
      "Excellence in Mathematics and Electronics",
      "Active participant in science exhibitions",
    ],
  },
];
