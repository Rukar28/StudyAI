import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Upload, 
  BookOpen, 
  MessageCircle, 
  BarChart3,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Upload,
      title: "PDF Upload & Extract",
      description: "Upload PDFs and get AI-generated summaries instantly",
      href: "/upload"
    },
    {
      icon: BookOpen,
      title: "Study Flow",
      description: "Get personalized 5-step study plans from your notes",
      href: "/study-flow"
    },
    {
      icon: Brain,
      title: "AI Flashcards",
      description: "Generate smart flashcards for active recall practice",
      href: "/flashcards"
    },
    {
      icon: MessageCircle,
      title: "AI Tutor",
      description: "Chat with AI for instant help and explanations",
      href: "/tutor"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                StudyAI
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
                Your Personal AI Tutor
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Students struggle with endless notes. We built StudyAI — your personal AI tutor on demand.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:glow-effect transition-smooth text-lg px-8 py-4"
              >
                <Link to="/dashboard">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Free
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 hover:glow-effect transition-smooth"
              >
                <Link to="/upload">
                  Try Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Powerful AI Study Tools
            </h3>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Everything you need to transform your study experience with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="glass-card hover:glow-effect transition-smooth group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-foreground/70 mb-4">{feature.description}</p>
                    <Button asChild variant="outline" size="sm" className="hover:glow-effect transition-smooth">
                      <Link to={feature.href}>
                        Try Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card p-12 animate-slide-up">
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto glow-effect">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to revolutionize your studying?
              </h3>
              <p className="text-xl text-foreground/70">
                Join thousands of students already using AI to learn smarter, not harder.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:glow-effect transition-smooth text-lg px-8 py-4"
              >
                <Link to="/dashboard">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
