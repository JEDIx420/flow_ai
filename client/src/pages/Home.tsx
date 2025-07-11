import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WaitlistModal from "@/components/WaitlistModal";
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  MessageCircle, 
  BarChart3, 
  Calendar, 
  Shield, 
  Zap,
  TrendingUp,
  Users,
  Target,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Smart Lead Scoring",
      description: "AI analyzes prospect behavior and engagement to prioritize your hottest leads automatically.",
      color: "from-primary to-primary/80"
    },
    {
      icon: MessageCircle,
      title: "Personalized Outreach",
      description: "Generate highly personalized emails and messages that resonate with each prospect.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your sales performance and identify optimization opportunities.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically schedule follow-ups and meetings based on prospect engagement patterns.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM and sales tools for a unified workflow.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up intelligent automation sequences that nurture leads without manual intervention.",
      color: "from-blue-500 to-blue-600"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 transition-all duration-500">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
            </div>

            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-10 backdrop-blur-sm shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Sales Intelligence</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[0.9] tracking-tight">
                Your AI Sales
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">Co-Pilot</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                Transform your sales process with intelligent automation. Flow AI helps you identify prospects, craft personalized outreach, and close more deals faster than ever before.
              </p>
              
              <div className="flex justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" 
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 px-6 py-4 border-b border-slate-200/50 dark:border-slate-600/50 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm font-medium">Flow AI Dashboard</div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent border border-blue-200/30 dark:border-blue-700/30 p-6 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-xl">
                          <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Sales Pipeline</h3>
                      </div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$2.4M</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">+23% this month</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent border border-emerald-200/30 dark:border-emerald-700/30 p-6 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-emerald-500/20 rounded-xl">
                          <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Active Leads</h3>
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">1,247</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">+18% this week</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-transparent border border-purple-200/30 dark:border-purple-700/30 p-6 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-purple-500/20 rounded-xl">
                          <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Conversion Rate</h3>
                      </div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">34.5%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">+8% this month</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              Supercharge Your Sales Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform provides everything you need to identify, engage, and convert prospects into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Flow AI</span>
              </div>
              <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
                Transform your sales process with intelligent automation. Flow AI helps you identify prospects, craft personalized outreach, and close more deals faster.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-slate-800/80 rounded-xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50">
                  <Twitter className="w-5 h-5 text-blue-400" />
                </a>
                <a href="#" className="p-3 bg-slate-800/80 rounded-xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
                <a href="#" className="p-3 bg-slate-800/80 rounded-xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50">
                  <Github className="w-5 h-5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Integrations</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">API</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-16 pt-8 text-center text-slate-400">
            <p className="text-lg">&copy; 2025 Flow AI. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
      
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
