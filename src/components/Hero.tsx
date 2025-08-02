import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional garment manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Professional Garment
          <br />
          <span className="text-accent">Finishing Services</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Expert button holes, button attachment, and finishing services for your shirts and garments. 
          Quality craftsmanship with industrial precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="accent" 
            size="xl"
            onClick={() => scrollToSection('contact')}
            className="min-w-[200px]"
          >
            Request Quote
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection('services')}
            className="min-w-[200px] bg-white/10 text-white border-white/30 hover:bg-white/20"
          >
            Our Services
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-slide-in">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
          <div className="text-center animate-slide-in">
            <div className="text-3xl font-bold text-accent mb-2">10K+</div>
            <div className="text-primary-foreground/80">Orders Completed</div>
          </div>
          <div className="text-center animate-slide-in">
            <div className="text-3xl font-bold text-accent mb-2">24h</div>
            <div className="text-primary-foreground/80">Quick Turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;