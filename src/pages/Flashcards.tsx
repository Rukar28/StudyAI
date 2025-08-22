import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Sparkles, 
  RotateCcw, 
  ChevronLeft,
  ChevronRight,
  Zap,
  Clock,
  CheckCircle2,
  RefreshCw,
  Globe
} from "lucide-react";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
}

const Flashcards = () => {
  const [notes, setNotes] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [language, setLanguage] = useState<"english" | "hindi">("english");

  const handleGenerateFlashcards = async () => {
    if (!notes.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const generatedCards: Flashcard[] = [
        {
          id: 1,
          question: language === "english" 
            ? "What is machine learning and how does it differ from traditional programming?" 
            : "मशीन लर्निंग क्या है और यह पारंपरिक प्रोग्रामिंग से कैसे अलग है?",
          answer: language === "english"
            ? "Machine learning is a subset of AI where computers learn patterns from data without being explicitly programmed. Unlike traditional programming where we write specific instructions, ML algorithms improve their performance through experience."
            : "मशीन लर्निंग AI का एक हिस्सा है जहाँ कंप्यूटर स्पष्ट रूप से प्रोग्राम किए बिना डेटा से पैटर्न सीखते हैं। पारंपरिक प्रोग्रामिंग के विपरीत जहाँ हम विशिष्ट निर्देश लिखते हैं, ML एल्गोरिदम अनुभव के माध्यम से अपने प्रदर्शन में सुधार करते हैं।",
          difficulty: "medium"
        },
        {
          id: 2,
          question: language === "english"
            ? "Explain the difference between supervised and unsupervised learning."
            : "पर्यवेक्षित और अपर्यवेक्षित शिक्षा के बीच अंतर समझाएं।",
          answer: language === "english"
            ? "Supervised learning uses labeled data to train models (input-output pairs), like classification and regression. Unsupervised learning finds patterns in unlabeled data, like clustering and dimensionality reduction."
            : "पर्यवेक्षित शिक्षा मॉडल को प्रशिक्षित करने के लिए लेबल किए गए डेटा का उपयोग करती है (इनपुट-आउटपुट जोड़े), जैसे वर्गीकरण और प्रतिगमन। अपर्यवेक्षित शिक्षा बिना लेबल वाले डेटा में पैटर्न खोजती है, जैसे क्लस्टरिंग और आयाम कमी।",
          difficulty: "easy"
        },
        {
          id: 3,
          question: language === "english"
            ? "What is overfitting and how can it be prevented?"
            : "ओवरफिटिंग क्या है और इसे कैसे रोका जा सकता है?",
          answer: language === "english"
            ? "Overfitting occurs when a model learns training data too well, including noise, leading to poor generalization. Prevention methods include regularization, cross-validation, early stopping, and using more training data."
            : "ओवरफिटिंग तब होता है जब एक मॉडल शोर सहित प्रशिक्षण डेटा को बहुत अच्छी तरह से सीखता है, जिससे खराब सामान्यीकरण होता है। रोकथाम के तरीकों में नियमितीकरण, क्रॉस-वैलिडेशन, जल्दी रोकना, और अधिक प्रशिक्षण डेटा का उपयोग शामिल है।",
          difficulty: "hard"
        },
        {
          id: 4,
          question: language === "english"
            ? "What are neural networks and how do they work?"
            : "न्यूरल नेटवर्क क्या हैं और वे कैसे काम करते हैं?",
          answer: language === "english"
            ? "Neural networks are computational models inspired by biological neural networks. They consist of interconnected nodes (neurons) organized in layers that process information through weighted connections and activation functions."
            : "न्यूरल नेटवर्क जैविक न्यूरल नेटवर्क से प्रेरित कम्प्यूटेशनल मॉडल हैं। वे परतों में व्यवस्थित आपस में जुड़े नोड्स (न्यूरॉन्स) से मिलकर बने होते हैं जो भारित कनेक्शन और सक्रियता फ़ंक्शन के माध्यम से जानकारी को प्रोसेस करते हैं।",
          difficulty: "medium"
        },
        {
          id: 5,
          question: language === "english"
            ? "Name three common evaluation metrics for classification models."
            : "वर्गीकरण मॉडल के लिए तीन सामान्य मूल्यांकन मैट्रिक्स नाम बताएं।",
          answer: language === "english"
            ? "Three common evaluation metrics are: 1) Accuracy - percentage of correct predictions, 2) Precision - true positives / (true positives + false positives), 3) Recall - true positives / (true positives + false negatives)."
            : "तीन सामान्य मूल्यांकन मैट्रिक्स हैं: 1) शुद्धता - सही भविष्यवाणियों का प्रतिशत, 2) प्रिसिजन - सही सकारात्मक / (सही सकारात्मक + गलत सकारात्मक), 3) रिकॉल - सही सकारात्मक / (सही सकारात्मक + गलत नकारात्मक)।",
          difficulty: "easy"
        }
      ];
      setFlashcards(generatedCards);
      setCurrentCard(0);
      setIsFlipped(false);
      setIsGenerating(false);
    }, 3000);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-400 bg-green-400/20";
      case "medium": return "text-yellow-400 bg-yellow-400/20";
      case "hard": return "text-red-400 bg-red-400/20";
      default: return "text-primary bg-primary/20";
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            AI Flashcard System
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Generate intelligent flashcards from your notes for active recall practice
          </p>
        </div>

        {flashcards.length === 0 ? (
          /* Generation Section */
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>Generate Flashcards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <select 
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as "english" | "hindi")}
                      className="bg-background/50 border border-foreground/20 rounded-lg px-3 py-1 text-sm"
                    >
                      <option value="english">English</option>
                      <option value="hindi">हिंदी</option>
                    </select>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder={language === "english" 
                    ? "Paste your study notes here... The AI will generate 5 targeted flashcards for active recall practice!"
                    : "अपने अध्ययन नोट्स यहाँ पेस्ट करें... AI सक्रिय रिकॉल अभ्यास के लिए 5 लक्षित फ्लैशकार्ड बनाएगा!"
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={10}
                  className="resize-none bg-background/50 border-foreground/20 focus:border-primary transition-smooth"
                />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">
                    {notes.length} characters
                  </span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {notes.length > 100 ? (language === "english" ? "Good length" : "अच्छी लंबाई") : (language === "english" ? "Add more details" : "अधिक विवरण जोड़ें")}
                  </Badge>
                </div>

                <Button 
                  onClick={handleGenerateFlashcards}
                  disabled={notes.length < 50 || isGenerating}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:glow-effect transition-smooth disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      {language === "english" ? "Generating Flashcards..." : "फ्लैशकार्ड बना रहे हैं..."}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      {language === "english" ? "Generate 5 AI Flashcards" : "5 AI फ्लैशकार्ड बनाएं"}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Flashcard View */
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Progress */}
            <div className="flex items-center justify-between animate-fade-in">
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-sm">
                  Card {currentCard + 1} of {flashcards.length}
                </Badge>
                <Badge 
                  variant="secondary" 
                  className={getDifficultyColor(flashcards[currentCard]?.difficulty)}
                >
                  {flashcards[currentCard]?.difficulty}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setLanguage(language === "english" ? "hindi" : "english")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === "english" ? "हिंदी" : "English"}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setFlashcards([]);
                    setNotes("");
                  }}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  New Set
                </Button>
              </div>
            </div>

            {/* Flashcard */}
            <div className="relative animate-slide-up">
              <Card 
                className={`glass-card cursor-pointer transition-all duration-500 transform ${
                  isFlipped ? 'rotateY-180' : ''
                } hover:glow-effect`}
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ 
                  minHeight: '400px',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <CardContent className="flex flex-col justify-center items-center text-center p-8 h-full">
                  {!isFlipped ? (
                    /* Question Side */
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto glow-effect">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                        {flashcards[currentCard]?.question}
                      </h2>
                      <div className="flex items-center justify-center space-x-2 text-foreground/60">
                        <RotateCcw className="w-4 h-4" />
                        <span className="text-sm">Click to reveal answer</span>
                      </div>
                    </div>
                  ) : (
                    /* Answer Side */
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto glow-effect">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-accent">Answer:</h3>
                        <p className="text-lg leading-relaxed text-foreground/90">
                          {flashcards[currentCard]?.answer}
                        </p>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-foreground/60">
                        <RotateCcw className="w-4 h-4" />
                        <span className="text-sm">Click to see question again</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between animate-fade-in">
              <Button 
                variant="outline" 
                onClick={prevCard}
                disabled={flashcards.length <= 1}
                className="hover:glow-effect transition-smooth"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-2">
                {flashcards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentCard(index);
                      setIsFlipped(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      index === currentCard 
                        ? 'bg-primary glow-effect' 
                        : 'bg-foreground/30 hover:bg-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                onClick={nextCard}
                disabled={flashcards.length <= 1}
                className="hover:glow-effect transition-smooth"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Study Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Active Recall</h3>
              <p className="text-sm text-foreground/60">
                Try to answer before flipping the card for better retention
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Spaced Repetition</h3>
              <p className="text-sm text-foreground/60">
                Review difficult cards more frequently for optimal learning
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Quick Sessions</h3>
              <p className="text-sm text-foreground/60">
                Short, frequent sessions are more effective than long cramming
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;