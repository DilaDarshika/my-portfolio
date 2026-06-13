import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code2, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#0F2847] flex flex-col">
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

      {/* Hero Section */}
      <div className="flex-1 container mx-auto px-4 py-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-accent text-sm font-semibold">Welcome to my portfolio</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm
                <span className="block text-accent">Dilani Darshika</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                I am an IT student at the Institute of Technology, University of Moratuwa, passionate about exploring cloud environments and systems engineering. Currently, I am building my skills to lay a strong foundation as an aspiring DevOps / Cloud Engineer.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/projects">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-sm text-muted-foreground">University</div>
                <div className="text-foreground font-semibold">ITUM</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Focus</div>
                <div className="text-foreground font-semibold">DevOps / Cloud</div>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center items-center lg:justify-end">
            <div className="relative group w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4]">
              {/* Glow background effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-accent/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-full h-full bg-card border border-border rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src="/profile.jpeg"
                    alt="Dilani Darshika"
                    className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <p className="text-muted-foreground text-sm">Let's connect and collaborate</p>
          <Link href="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
