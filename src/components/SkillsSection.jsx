import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiDart,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML", category: "Frontend", icon: <SiHtml5 className="text-3xl text-orange-500" /> },
  { name: "CSS", category: "Frontend", icon: <SiCss3 className="text-3xl text-blue-500" /> },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript className="text-3xl text-yellow-400" /> },
  { name: "ReactJS", category: "Frontend", icon: <SiReact className="text-3xl text-cyan-400" /> },
  { name: "Flutter", category: "Frontend", icon: <SiFlutter className="text-3xl text-blue-400" /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-3xl text-sky-400" /> },

  { name: "PHP (Laravel)", category: "Backend", icon: <SiPhp className="text-3xl text-indigo-500" /> },
  { name: "SQL", category: "Backend", icon: <SiMysql className="text-3xl text-blue-600" /> },
  { name: "Firebase", category: "Backend", icon: <SiFirebase className="text-3xl text-yellow-500" /> },
  { name: "Dart", category: "Backend", icon: <SiDart className="text-3xl text-sky-600" /> },

  { name: "Git/Github", category: "Tools", icon: <SiGithub className="text-3xl" /> },
  { name: "Figma", category: "Tools", icon: <SiFigma className="text-3xl text-pink-500" /> },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Tech Stack</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
            >
              <div className="text-primary">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
