import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Shirt, Settings, CheckCircle } from "lucide-react";
import servicesImage from "@/assets/services-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Button Holes",
      description: "Precision button hole cutting for all types of garments",
      features: ["Machine cut precision", "Various sizes available", "Clean finishing", "Quick turnaround"]
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Button Attachment",
      description: "Professional button sewing and secure attachment",
      features: ["Strong attachment", "Various button types", "Color matching", "Bulk orders"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Garment Finishing",
      description: "Complete finishing services for your garments",
      features: ["Quality control", "Final pressing", "Packaging", "Label attachment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional garment services with industrial precision and quality craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-xl shadow-medium p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Our Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Industrial Equipment</h4>
                    <p className="text-muted-foreground">State-of-the-art machinery for precise and consistent results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground">Rigorous quality control processes ensure perfect finishing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast Delivery</h4>
                    <p className="text-muted-foreground">Quick turnaround times without compromising on quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                    <p className="text-muted-foreground">Best rates for bulk orders and regular customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={servicesImage} 
                alt="Professional garment services"
                className="rounded-lg shadow-medium max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;