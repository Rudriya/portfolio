"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structures and Algorithms</li>
        <li>OOPs</li>
        <li>Python (Intermediate)</li>
        <li>Backend: Node.js</li>
        <li>Machine Learning (Intermediate)</li>
        <li>C++ / C</li>
        <li>Java (Intermediate)</li>
        <li>Front end: HTML, CSS, JavaScript</li>
        <li>Databases: MongoDB, MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Technology (CSE Core) - Vellore Institute of Technology, Bhopal, MP (2026) - 8.63 CGPA</li>
        <li>CBSE XII (PCM + PE) - Maharshi Public School, Amravati, MH (2022) - 75%</li>
        <li>CBSE X - Jain Heritage - A Cambridge School, Nagpur, MH (2020) - 89%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
         <li>Industrial IoT Markets and Security - Coursera (2024)</li>
        <li>Career Essentials in Data Analysis (Microsoft + LinkedIn Learning) - LinkedIn Learning (2024)</li>
        <li>NPTEL Cloud Computing - NPTEL (2024)</li>
        <li>DSA + Java - Apna College (2024)</li>
    </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt=" hh" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate Computer Science student with a keen interest in problem-solving, software development, 
        and machine learning. With hands-on experience in Python, C++, and Java, I have worked on projects spanning 
        web development, automation, and AI-driven applications. My internships and research projects, including collaborations 
        with TU Delft and DRDO, have enhanced my expertise in data analysis, backend development, and cloud computing. 
        I am a fast learner, always eager to explore new technologies and contribute to innovative solutions. 
        </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
