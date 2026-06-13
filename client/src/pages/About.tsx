import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

/**
 * About Page - Student background and skills
 * Simple and personal
 */
export default function About() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "Java"] },
    { category: "Learning", items: ["Data Structures", "Algorithms", "OOP"] },
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
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left - Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Hello! I'm Dilani</h2>
              <p className="text-foreground leading-relaxed">
                Currently pursuing my IT studies at the Institute of Technology, University of Moratuwa, I have developed a deep fascination for tech architecture and modern systems. My ultimate goal is to bridge the gap between development and operations by becoming a skilled DevOps / Cloud Engineer.
              </p>
              <p className="text-foreground leading-relaxed">
                My ongoing studies and hands-on experience with core IT fundamentals have helped me build a strong analytical mindset and problem-solving skills. I find these ongoing learnings highly valuable as I expand into cloud computing, automation, and infrastructure engineering to design reliable and scalable systems.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-semibold text-foreground">Institute of Technology</h3>
                  <p className="text-sm text-muted-foreground">University of Moratuwa</p>
                  <p className="text-sm text-muted-foreground">Currently Studying</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Quick Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Dilani Darshika"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-foreground text-lg">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">University</p>
                  <p className="text-foreground font-medium">ITUM</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium break-all">diladarshika2002@gmail.com</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Interests</p>
                  <p className="text-foreground font-medium">DevOps, Cloud Computing, Systems Engineering</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                Always eager to learn and take on new challenges. Feel free to reach out if you'd like to connect or collaborate!
              </p>
              <Link href="/contact">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Skills & Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-bold text-accent text-lg">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 text-accent rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
