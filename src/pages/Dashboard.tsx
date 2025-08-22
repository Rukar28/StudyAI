import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Calendar, 
  TrendingUp, 
  BookOpen, 
  Target,
  Award,
  Clock
} from "lucide-react";

const Dashboard = () => {
  // Mock data - will be replaced with real data from Supabase
  const stats = {
    xp: 2450,
    streak: 7,
    notesProcessed: 23,
    flashcardsGenerated: 156,
    studySessionsCompleted: 34
  };

  const weeklyActivity = [
    { day: "Mon", value: 3 },
    { day: "Tue", value: 7 },
    { day: "Wed", value: 5 },
    { day: "Thu", value: 9 },
    { day: "Fri", value: 6 },
    { day: "Sat", value: 4 },
    { day: "Sun", value: 8 }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Your Study Dashboard
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Track your learning progress and keep the momentum going!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <Card className="glass-card hover:glow-effect transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Total XP</CardTitle>
              <Zap className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.xp.toLocaleString()}</div>
              <p className="text-xs text-foreground/60">+180 this week</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Study Streak</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.streak} days</div>
              <p className="text-xs text-foreground/60">Keep it up! 🔥</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Notes Processed</CardTitle>
              <BookOpen className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{stats.notesProcessed}</div>
              <p className="text-xs text-foreground/60">+3 this week</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">Flashcards</CardTitle>
              <Brain className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">{stats.flashcardsGenerated}</div>
              <p className="text-xs text-foreground/60">Generated this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Study Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span>Weekly Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-40 space-x-2">
                  {weeklyActivity.map((day, index) => (
                    <div key={day.day} className="flex flex-col items-center space-y-2 flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-smooth hover:glow-effect"
                        style={{ height: `${(day.value / 10) * 100}%` }}
                      />
                      <span className="text-xs text-foreground/60">{day.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span>Weekly Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Study Sessions</span>
                    <span className="text-foreground/60">5/7</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Flashcards Reviewed</span>
                    <span className="text-foreground/60">45/50</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>XP Earned</span>
                    <span className="text-foreground/60">420/500</span>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                    🔥
                  </div>
                  <div>
                    <p className="font-medium">Week Warrior</p>
                    <p className="text-xs text-foreground/60">7-day study streak</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    🧠
                  </div>
                  <div>
                    <p className="font-medium">Flash Master</p>
                    <p className="text-xs text-foreground/60">100+ flashcards created</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                    📚
                  </div>
                  <div>
                    <p className="font-medium">Note Ninja</p>
                    <p className="text-xs text-foreground/60">20+ documents processed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    PDF
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm">Physics Notes Ch.5</p>
                    <p className="text-xs text-foreground/60">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    FLASH
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm">Chemistry Flashcards</p>
                    <p className="text-xs text-foreground/60">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-green-400/20 text-green-400">
                    CHAT
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm">AI Tutor Session</p>
                    <p className="text-xs text-foreground/60">Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;