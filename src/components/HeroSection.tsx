import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroChildLeft from "@/assets/hero-child-left.png";
import heroChildRight from "@/assets/hero-child-right.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[500px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Hero Images */}
        <img 
          src={heroChildLeft} 
          alt="Student learning" 
          className="absolute left-8 bottom-8 w-32 h-32 object-cover rounded-full opacity-90"
        />
        <img 
          src={heroChildRight} 
          alt="Happy student" 
          className="absolute right-8 bottom-8 w-32 h-32 object-cover rounded-full opacity-90"
        />
        
        {/* Stats */}
        <div className="absolute left-8 top-48 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
          <div className="text-lg font-bold">500+</div>
          <div className="text-sm">Courses</div>
        </div>
        <div className="absolute right-8 top-48 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
          <div className="text-lg font-bold">10k+</div>
          <div className="text-sm">Happy kids</div>
        </div>
        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn a New Skill
          </h1>
          <p className="text-xl md:text-4xl text-accent-light mb-8">
            Everyday, Anytime, and Anywhere.
          </p>
          
          {/* Search Bar */}
          <div className="hero-search max-w-2xl mx-auto mb-8">
            <Search className="text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="What do you want to learn today?"
              className="border-none bg-transparent text-foreground placeholder:text-muted-foreground flex-1 focus-visible:ring-0"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8">
              Search
            </Button>
          </div>
          
          {/* Rating */}
          <div className="absolute left-40 bottom-8 text-white flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-sm ml-2">Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
