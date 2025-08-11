import { Laptop, Mic, Crown, Book, Smartphone } from "lucide-react";

const PopularCategories = () => {
  const categories = [
    {
      title: "Coding",
      icon: Laptop,
      gradient: "bg-gradient-to-br from-accent to-accent-light"
    },
    {
      title: "Public speaking", 
      icon: Mic,
      gradient: "bg-gradient-to-br from-gray-600 to-gray-700"
    },
    {
      title: "Chess",
      icon: Crown,
      gradient: "bg-gradient-to-br from-gray-600 to-gray-700"
    },
    {
      title: "Home work help",
      icon: Book,
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "App building",
      icon: Smartphone,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Categories 🌟</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pick what you love most! These categories have everything you need to learn something awesome
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className={`${category.gradient} p-6 rounded-2xl text-white transition-transform hover:scale-105 cursor-pointer group`}
              >
                <div className="text-center">
                  <IconComponent className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;