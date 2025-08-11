import { useState } from "react";

const AgeFilter = () => {
  const [selectedAge, setSelectedAge] = useState("7-8");

  const ageRanges = [
    { range: "1-2", color: "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" },
    { range: "2-3", color: "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black" },
    { range: "3-4", color: "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black" },
    { range: "4-5", color: "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black" },
    { range: "5-6", color: "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black" },
    { range: "6-7", color: "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black" },
    { range: "7-8", color: "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black" },
    { range: "8-9", color: "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black" },
    { range: "9-10", color: "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black" },
    { range: "10-11", color: "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black" },
    { range: "11-12", color: "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black" },
    { range: "12-13", color: "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black" },
    { range: "13-14", color: "border-green-500 text-green-500 hover:bg-green-500 hover:text-black" },
    { range: "14-15", color: "border-green-500 text-green-500 hover:bg-green-500 hover:text-black" },
    { range: "15-16", color: "border-green-500 text-green-500 hover:bg-green-500 hover:text-black" },
    { range: "16-17", color: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black" },
    { range: "17-18", color: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black" },
    { range: "18-19", color: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black" },
    { range: "19-20", color: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black" },
  ];

  return (
    <section className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">How Old Are You? 🎯</h2>
          <p className="text-muted-foreground">
            Pick your age and find the perfect courses just for you! ✨
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {ageRanges.map((item) => {
            const isActive = selectedAge === item.range;
            return (
              <button
                key={item.range}
                onClick={() => setSelectedAge(item.range)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 
                  ${isActive ? `${item.color.split(" ")[0].replace("border-", "bg-")} text-black` : item.color}
                `}
              >
                <div className="text-sm font-medium">{item.range}</div>
                <div className="text-xs">Years</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgeFilter;
  