import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload as UploadIcon, 
  FileText, 
  Sparkles, 
  Download,
  Eye,
  Clock,
  CheckCircle2
} from "lucide-react";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState("");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleGenerateSummary = async () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    // Simulate API call delay
    setTimeout(() => {
      setSummary(`
AI-Generated Summary of "${uploadedFile.name}":

This document covers key concepts in machine learning, focusing on supervised and unsupervised learning algorithms. The main topics include:

• **Linear Regression**: A fundamental algorithm for predicting continuous values based on linear relationships between variables.

• **Decision Trees**: Tree-like models that make decisions by splitting data based on feature values, useful for both classification and regression.

• **Neural Networks**: Computational models inspired by biological neural networks, capable of learning complex patterns through layers of interconnected nodes.

• **Clustering Algorithms**: Unsupervised methods like K-means for grouping similar data points without labeled examples.

• **Model Evaluation**: Techniques for assessing model performance including cross-validation, precision, recall, and F1-score.

The document emphasizes practical implementation strategies and provides code examples for each algorithm. It also discusses common pitfalls like overfitting and underfitting, along with regularization techniques to improve model generalization.

**Key Takeaways**: Start with simple models, understand your data thoroughly, and always validate your results with appropriate metrics.
      `);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Upload & Extract
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Upload your PDF documents and let AI generate intelligent summaries instantly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UploadIcon className="w-5 h-5 text-primary" />
                <span>Upload PDF Document</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Drag & Drop Zone */}
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-smooth ${
                  isDragging 
                    ? "border-primary bg-primary/10 glow-effect" 
                    : "border-foreground/20 hover:border-primary/50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <FileText className="w-12 h-12 mx-auto text-foreground/50 mb-4" />
                <p className="text-lg font-medium mb-2">
                  Drop your PDF here or click to browse
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  Supports PDF files up to 10MB
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="pdf-upload"
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('pdf-upload')?.click()}
                  className="hover:glow-effect transition-smooth"
                >
                  Browse Files
                </Button>
              </div>

              {/* Uploaded File Info */}
              {uploadedFile && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <div className="flex-1">
                      <p className="font-medium text-green-400">{uploadedFile.name}</p>
                      <p className="text-sm text-foreground/60">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      Ready
                    </Badge>
                  </div>
                </div>
              )}

              {/* Generate Summary Button */}
              <Button 
                onClick={handleGenerateSummary}
                disabled={!uploadedFile || isProcessing}
                className="w-full bg-gradient-to-r from-primary to-accent hover:glow-effect transition-smooth disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Generating Summary...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate AI Summary
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Summary Section */}
          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>AI-Generated Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {summary ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                      {summary}
                    </pre>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Sparkles className="w-16 h-16 mx-auto text-foreground/30 mb-4" />
                  <p className="text-foreground/60">
                    Upload a PDF document and generate a summary to see results here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Smart Extraction</h3>
              <p className="text-sm text-foreground/60">
                Advanced AI extracts key information from your documents
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Intelligent Summaries</h3>
              <p className="text-sm text-foreground/60">
                Get concise, well-structured summaries in seconds
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover:glow-effect transition-smooth">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-foreground/60">
                High-quality outputs powered by advanced language models
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;