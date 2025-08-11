import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold text-primary">Logo</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Course</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6">
            Register for free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;