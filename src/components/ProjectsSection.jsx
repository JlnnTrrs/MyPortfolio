import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  Github,
} from "lucide-react";

const iconMap = {
  Java: <Code2 size={14} />,
  MySQL: <Database size={14} />,
  PHP: <Server size={14} />,
  CSS: <Globe size={14} />,
  JavaScript: <Code2 size={14} />,
  Dart: <Smartphone size={14} />,
  Flutter: <Smartphone size={14} />,
  Firebase: <Database size={14} />,
  HTML: <Globe size={14} />,
  "Laravel (PHP)": <Server size={14} />,
  Bootstrap: <Globe size={14} />,
};

const projects = [
  {
    id: 1,
    title: "GARA's Burger: POS and Queueing Management System",
    description:
      "Built entirely in Java, this system manages customer orders, tracks sales, and handles queuing for efficient service flow.",
    tags: ["Java", "MySQL"],
    githubURL: "https://github.com/JlnnTrrs/Gara-s-Burger.git",
  },
  {
    id: 2,
    title: "FurryFinds: E-Commerce Website",
    description:
      "An intuitive and user-friendly PHP-based e-commerce platform designed for seamless browsing and purchasing of pet food, accessories, and essential supplies—tailored for pet lovers.",
    tags: ["PHP", "CSS", "JavaScript", "MySQL"],
    githubURL: "https://github.com/JlnnTrrs/FurryFinds.git",
  },
  {
    id: 3,
    title: "TechServe: Tech Service Management Application",
    description:
      "A mobile application designed to manage technical service requests by efficiently processing user issues and matching tasks with specialists based on their expertise.",
    tags: ["Dart", "Flutter", "Firebase"],
    githubURL: "https://github.com/JlnnTrrs/TechServe.git",
  },
  {
    id: 4,
    title: "Francheska's: Sales and Inventory Management System",
    description:
      "A web-based Sales and Inventory Management System that helps streamline product tracking, sales recording and stock monitoring.",
    tags: ["PHP", "HTML", "CSS", "Laravel (PHP)", "Bootstrap", "MySQL"],
    githubURL: "https://github.com/JlnnTrrs/Francheska-s.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card h-full flex flex-col justify-between rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border"
                >
                  {iconMap[tag]} {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
