import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Page - Simple contact form
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message received! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Have a question or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-foreground text-lg">Contact Info</h3>
              <a
                href="mailto:diladarshika2002@gmail.com"
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
              >
                <Mail size={20} />
                <span className="break-all">diladarshika2002@gmail.com</span>
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-foreground text-lg">Response Time</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected</span>
                  <span className="text-accent font-medium">1-2 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-accent font-medium">Open</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="text-sm text-foreground leading-relaxed">
                I check my emails regularly and will try to respond as soon as possible. Thanks for reaching out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
