import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Garment Technician",
      department: "Production",
      type: "Full-time",
      location: "Manufacturing Facility",
      salary: "$45,000 - $55,000",
      description: "Experienced technician to operate industrial sewing and finishing equipment.",
      requirements: [
        "5+ years experience with industrial garment equipment",
        "Knowledge of button hole and attachment machinery",
        "Quality control experience",
        "Ability to work in fast-paced environment"
      ]
    },
    {
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      type: "Full-time",
      location: "Manufacturing Facility",
      salary: "$38,000 - $45,000",
      description: "Ensure all finished garments meet our high quality standards.",
      requirements: [
        "3+ years in garment quality control",
        "Attention to detail",
        "Knowledge of garment construction",
        "Experience with quality documentation"
      ]
    },
    {
      title: "Production Supervisor",
      department: "Management",
      type: "Full-time",
      location: "Manufacturing Facility",
      salary: "$55,000 - $65,000",
      description: "Lead production teams and ensure efficient workflow operations.",
      requirements: [
        "Leadership experience in manufacturing",
        "Knowledge of garment production processes",
        "Strong communication skills",
        "Ability to manage multiple teams"
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Above-market wages with performance bonuses"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible scheduling and paid time off"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Career advancement and skill development programs"
    }
  ];

  return (
    <section id="careers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your career with a growing company that values expertise, quality, and innovation in garment finishing.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Current Openings</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-accent">{job.salary}</div>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Requirements:</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="hero" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* General Application */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-medium">
            <CardHeader>
              <CardTitle>Don't See Your Role?</CardTitle>
              <CardDescription>
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="accent" size="lg">
                Submit General Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;