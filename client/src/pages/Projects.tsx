import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

/**
 * Projects Page - Simple student projects
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Python Learning Projects",
      description: "Various Python projects created while learning programming concepts including data structures, algorithms, and problem-solving.",
      technologies: ["Python"],
      github: "https://github.com/DilaDarshika/python-learning-projects.git",
      preview: "https://python-projects-demo.vercel.app",
    },
    {
      id: 2,
      title: "Java Practice Programs",
      description: "Object-oriented programming practice with Java. Focused on understanding OOP principles and design patterns.",
      technologies: ["Java"],
      github: "https://github.com/DilaDarshika/java-practice-programs.git",
      preview: "https://java-practice-demo.vercel.app",
    },
    {
      id: 3,
      title: "DevOps Infrastructure Automation",
      description: "A lab repository containing scripts, Dockerfiles, and configuration files for setting up pipelines and deploying containers on cloud environments.",
      technologies: ["Docker", "Git", "Linux", "CI/CD"],
      github: "https://github.com/DilaDarshika/devops-automation-lab-.git",
      preview: "https://devops-lab-demo.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#0F2847]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-foreground">Dilani</span>
            <span className="text-accent">.</span>
          </div>
          <div className="flex gap-8 items-center">
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-sm">Home</Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors text-sm">About</Link>
            <Link href="/projects" className="text-foreground hover:text-accent transition-colors text-sm">Projects</Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors text-sm">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-16">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-accent hover:text-accent/80 mb-8 text-sm">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Here are some of the projects I've worked on while learning programming and DevOps fundamentals. Each project has helped me build my skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Project Number */}
                <div className="text-sm font-bold text-accent/60">
                  Project {String(project.id).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-accent rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links (HCI Requirements: clear links with icons & hover effects) */}
              <div className="flex justify-between items-center pt-6 border-t border-border mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  <Github size={14} />
                  GitHub Code
                </a>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">More Projects Coming Soon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm continuously working on new projects and improving my skills. Check back soon for more updates!
          </p>
          <Link href="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Let's Collaborate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
