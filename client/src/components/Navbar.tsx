import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Zap, Sun, Moon } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Flow AI</span>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-12 h-12 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            >
              {theme === "light" ? (
                <Moon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Sun className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              )}
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" 
              onClick={() => setIsWaitlistOpen(true)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </nav>
  );
}
