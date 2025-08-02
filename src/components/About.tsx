import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "15+ years of expertise in garment finishing with skilled craftspeople"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Standards",
      description: "ISO certified processes ensuring consistent high-quality results"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Work",
      description: "Industrial-grade equipment for accurate and reliable finishing"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "Efficient workflows enabling quick delivery without quality compromise"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About GarmentPro</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                GarmentPro has been a trusted partner in the garment industry for over 15 years, 
                specializing in professional button hole creation, button attachment, and comprehensive 
                finishing services.
              </p>
              <p>
                Our state-of-the-art facility is equipped with industrial-grade machinery and operated 
                by skilled craftspeople who understand the importance of precision in garment finishing. 
                We serve fashion brands, manufacturers, and individual customers who demand excellence.
              </p>
              <p>
                What sets us apart is our commitment to quality, speed, and reliability. Every garment 
                that passes through our facility undergoes rigorous quality control to ensure it meets 
                our high standards before being returned to our customers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            To provide exceptional garment finishing services that help our clients deliver 
            high-quality products to their customers, while maintaining the fastest turnaround 
            times in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;