
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Code, User, BookOpen, Award, Phone, ArrowRight, ExternalLink, MapPin, Calendar } from "lucide-react";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const skills = {
    "Programming Languages": ["Python", "Java", "C", "C++"],
    "Web Technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "PHP"],
    "Frameworks & Backend": ["Django", "PHP"],
    "Databases": ["MySQL", "SQLite", "Oracle"],
    "Tools": ["VS Code", "Eclipse", "Git", "GitHub"],
    "OS": ["Windows", "Linux"]
  };

  const projects = [
    {
      title: "Note Flow",
      description: "Web-based note management system with user authentication and real-time editing capabilities",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "#"
    },
    {
      title: "Online Café",
      description: "Full-stack ordering system with menu management, cart functionality, and order tracking",
      tech: ["Django", "SQLite", "HTML", "CSS"],
      github: "#"
    },
    {
      title: "Smart Gate System",
      description: "Secure access monitoring interface with real-time notifications and user management",
      tech: ["React.js", "JavaScript", "CSS"],
      github: "#"
    }
  ];

  const certifications = [
    { name: "Python for Everybody", platform: "Coursera", year: "2023" },
    { name: "Web Development Bootcamp", platform: "Udemy", year: "2023" },
    { name: "Introduction to Java", platform: "NPTEL", year: "2022" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Sending email with EmailJS...");
      
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        message: contactForm.message,
        to_name: "Aaryan Shah"
      };

      const result = await emailjs.send(
        'service_3ldotwp',
        'template_xifoicf',
        templateParams,
        'EsR3v0Yl8RWJpkX37'
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setContactForm({
        name: "",
        email: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-purple-900/40 to-slate-900/20"></div>
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AZ
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Services", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-purple-400 relative ${
                    activeSection === item.toLowerCase() 
                      ? "text-purple-400 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-400 after:bottom-[-4px] after:left-0" 
                      : "text-white/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-purple-600/5 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-600/30 mb-4 px-4 py-2">
                  Currently Available For Freelance Worldwide
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Aaryan Shah
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl text-white/80 mb-8 font-light">
                Web Designer & Software Developer
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl leading-relaxed">
                Dedicated IT enthusiast pursuing MCA at SVGU University with a passion for creating 
                innovative web solutions and software applications that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  View My Work
                </Button>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-600/90 hover:to-blue-600/90 hover:border-purple-400/50 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Profile Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-1 animate-pulse">
                    <img 
                      src="/lovable-uploads/27087ec1-86aa-4764-bf88-475901831429.png"
                      alt="Aaryan Shah"
                      className="w-full h-full rounded-full object-cover object-center border-4 border-white/10"
                    />
                  </div>
                  {/* Floating elements around the image */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4 shadow-lg animate-bounce">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 shadow-lg" style={{animationDelay: '0.5s'}}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-2 shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A passionate developer with strong technical skills and a detail-oriented approach to problem-solving
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-purple-400" />
                    Education & Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/80 space-y-4">
                  <div className="p-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg border border-purple-600/20">
                    <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Master of Computer Applications (MCA)
                    </h3>
                    <p className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      SVGU University • Currently Pursuing
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-600/20">
                    <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      GLS University • Completed
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      Core Strengths
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Communication", "Teamwork", "Time Management", "Problem Solving", "Detail-Oriented"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border border-purple-600/30 hover:scale-105 transition-transform duration-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="prose prose-invert text-white/80 text-lg leading-relaxed space-y-6">
                <div className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <p className="mb-6">
                    Dedicated and detail-oriented IT enthusiast currently pursuing MCA at SVGU University. 
                    With a strong foundation in computer applications and a passion for technology, I strive 
                    to create innovative solutions that make a difference.
                  </p>
                  <p className="mb-6">
                    Based in Ahmedabad, Gujarat, I bring together academic excellence with practical 
                    project experience. My journey in technology is driven by curiosity and a commitment 
                    to continuous learning.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or collaborating with fellow developers to solve complex challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technical Skills</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and programming languages
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card 
                key={category} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors duration-300">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border-purple-600/30 hover:from-purple-600/30 hover:to-blue-600/30 hover:scale-110 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Showcasing my latest work in web development and software engineering
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/60 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.open('https://github.com/Aaryan408', '_blank')}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none transform hover:scale-105 transition-all duration-200 group shadow-lg hover:shadow-purple-500/25"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                    View on GitHub
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Professional development services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl group-hover:text-purple-400 transition-colors duration-300">Web Design</CardTitle>
                <CardDescription className="text-white/60 text-lg">
                  Frontend development with modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/80">
                <p>Creating responsive and interactive web interfaces using HTML, CSS, Bootstrap, JavaScript, and React.js. 
                   Focus on user experience and modern design principles.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl group-hover:text-purple-400 transition-colors duration-300">Software Development</CardTitle>
                <CardDescription className="text-white/60 text-lg">
                  Custom applications and backend solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/80">
                <p>Building robust software applications using Python, Java, Django, and PHP. 
                   Specializing in database design and full-stack development solutions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Certifications</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-purple-400 transition-colors duration-300">{cert.name}</CardTitle>
                  <CardDescription className="text-white/60">
                    {cert.platform} • {cert.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <Input 
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        placeholder="Your Name" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors duration-200"
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        name="email"
                        type="email" 
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        placeholder="Your Email" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors duration-200"
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactFormChange}
                        placeholder="Your Message" 
                        rows={5}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors duration-200"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Phone className="w-6 h-6 text-purple-400" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-white/60">shaharyan408@gmail.com</p>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                    onClick={() => window.open('https://github.com/Aaryan408', '_blank')}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">GitHub</p>
                      <p className="text-white/60">github.com/Aaryan408</p>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                    onClick={() => window.open('https://linkedin.com/in/aaryanshah-tech', '_blank')}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">LinkedIn</p>
                      <p className="text-white/60">linkedin.com/in/aaryanshah-tech</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  Based in Ahmedabad, Gujarat
                </h4>
                <p className="text-white/60">
                  Available for freelance projects worldwide. Open to remote collaboration 
                  and exciting opportunities in web development and software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2024 Aaryan Shah. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110"
                onClick={() => window.open('https://github.com/Aaryan408', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110"
                onClick={() => window.open('https://linkedin.com/in/aaryanshah-tech', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
