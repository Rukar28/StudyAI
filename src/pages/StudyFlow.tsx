import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Target,
  Brain,
  Lightbulb
} from "lucide-react";

const StudyFlow = () => {
  const [notes, setNotes] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [studyPlan, setStudyPlan] = useState<any[]>([]);

  const handleGenerateStudyPlan = async () => {
    if (!notes.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setStudyPlan([
        {
          step: 1,
          title: "Initial Reading & Overview",
          duration: "15-20 minutes",
          description: "Read through your notes completely to get a big picture understanding. Don't worry about memorizing details yet.",
          tips: ["Take your time", "Highlight key concepts", "Note any confusing areas"],
          status: "pending"
        },
        {
          step: 2,
          title: "Concept Mapping",
          duration: "20-25 minutes", 
          description: "Create visual connections between different concepts. Draw diagrams, flowcharts, or mind maps to understand relationships.",
          tips: ["Use colors and symbols", "Connect related ideas", "Identify main themes"],
          status: "pending"
        },
        {
          step: 3,
          title: "Active Recall Practice",
          duration: "30 minutes",
          description: "Close your notes and try to explain key concepts out loud or write them from memory. This strengthens neural pathways.",
          tips: ["Explain to yourself", "Use the Feynman technique", "Identify knowledge gaps"],
          status: "pending"
        },
        {
          step: 4,
          title: "Problem Solving & Application",
          duration: "25-30 minutes",
          description: "Apply what you've learned to practice problems or real-world scenarios. This deepens understanding.",
          tips: ["Start with easy problems", "Work through examples", "Think about applications"],
          status: "pending"
        },
        {
          step: 5,
          title: "Review & Consolidation",
          duration: "15 minutes",
          description: "Review everything you've learned, fill in any gaps, and create a final summary for future reference.",
          tips: ["Summarize key points", "Note areas for follow-up", "Plan next study session"],
          status: "pending"
        }
      ]);
      setIsGenerating(false);
    }, 2500);
  };

  const markStepComplete = (stepIndex: number) => {
    setStudyPlan(prev => prev.map((step, index) => 
      index === stepIndex ? { ...step, status: "completed" } : step
    ));
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Personalized Study Flow
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Paste your notes and get an AI-generated personalized study plan tailored to your content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Your Study Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste your study notes here... The more detailed, the better your personalized study plan will be!"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={12}
                className="resize-none bg-background/50 border-foreground/20 focus:border-primary transition-smooth"
              />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/60">
                  {notes.length} characters
                </span>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {notes.length > 100 ? "Good length" : "Add more details"}
                </Badge>
              </div>

              <Button 
                onClick={handleGenerateStudyPlan}
                disabled={notes.length < 50 || isGenerating}
                className="w-full bg-gradient-to-r from-primary to-accent hover:glow-effect transition-smooth disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Generating Your Plan...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Personalized Study Plan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Study Plan Timeline */}
          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-accent" />
                <span>Your Study Timeline</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {studyPlan.length > 0 ? (
                <div className="space-y-6 animate-fade-in">
                  {studyPlan.map((step, index) => (
                    <div key={step.step} className="relative">
                      {/* Timeline Line */}
                      {index < studyPlan.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-primary to-accent opacity-30" />
                      )}
                      
                      <div className="flex space-x-4">
                        {/* Step Number */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold transition-smooth ${
                          step.status === "completed" 
                            ? "bg-green-500 text-white glow-effect" 
                            : "bg-gradient-to-r from-primary to-accent text-white"
                        }`}>
                          {step.status === "completed" ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            step.step
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {step.duration}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {step.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {step.tips.map((tip: string, tipIndex: number) => (
                              <Badge key={tipIndex} variant="secondary" className="text-xs bg-accent/20 text-accent">
                                <Lightbulb className="w-3 h-3 mr-1" />
                                {tip}
                              </Badge>
                            ))}
                          </div>

                          {step.status === "pending" && (
                            <Button 
                              size="sm"
                              onClick={() => markStepComplete(index)}
                              className="mt-2 bg-gradient-to-r from-green-400 to-blue-400 hover:glow-effect transition-smooth"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Mark Complete
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Completion Message */}
                  {studyPlan.every(step => step.status === "completed") && (
                    <div className="text-center p-6 rounded-lg bg-green-500/10 border border-green-500/20 animate-fade-in">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-4 glow-effect">
                        🎉
                      </div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">Study Session Complete!</h3>
                      <p className="text-foreground/70">Great job completing your personalized study plan. Keep up the momentum!</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 mx-auto text-foreground/30 mb-4" />
                  <p className="text-foreground/60">
                    Enter your notes and generate a study plan to see your personalized timeline here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Study Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Spaced Repetition</h3>
              <p className="text-sm text-foreground/60">
                Review material at increasing intervals for better retention
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Active Learning</h3>
              <p className="text-sm text-foreground/60">
                Engage with material through practice and application
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Feynman Technique</h3>
              <p className="text-sm text-foreground/60">
                Explain concepts simply to identify knowledge gaps
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyFlow;