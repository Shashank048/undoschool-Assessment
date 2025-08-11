import { useState } from "react";
import { Sun, Sunset, Moon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import roboticsCourse from "@/assets/robotics-course.jpg";

const TimeFilter = () => {
  const [selectedTime, setSelectedTime] = useState("morning");
  
  const timeSlots = [
    {
      id: "morning",
      title: "Morning classes",
      time: "8am - 12pm",
      icon: Sun
    },
    {
      id: "afternoon", 
      title: "Afternoon classes",
      time: "12pm - 4pm",
      icon: Sun
    },
    {
      id: "evening",
      title: "Evening classes", 
      time: "4pm - 8pm",
      icon: Sunset
    },
    {
      id: "late-evening",
      title: "Late evening classes",
      time: "8pm - 11pm", 
      icon: MoonIcon
    }
  ];

  const courses = [
    {
      title: "Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing",
      image: roboticsCourse,
      rating: 4.9,
      reviews: 299,
      price: 299,
      ageRange: "7-10",
      difficulty: "Intermediate",
      lessons: 4,
      isSellingFast: true,
      instructor: "Daniel James"
    },
    {
      title: "Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing",
      image: roboticsCourse,
      rating: 4.9,
      reviews: 299,
      price: 299,
      ageRange: "7-10", 
      difficulty: "Intermediate",
      lessons: 4,
      instructor: "Daniel James"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Filter with Time</h2>
          <p className="text-muted-foreground">Choose the perfect time that fits your child's schedule</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timeSlots.map((slot) => {
            const IconComponent = slot.icon;
            return (
              <div
                key={slot.id}
                className={`time-slot-card bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                  selectedTime === slot.id 
                    ? "border-primary bg-primary/5 shadow-lg" 
                    : "border-gray-200 hover:border-primary/30 hover:shadow-md"
                }`}
                onClick={() => setSelectedTime(slot.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <IconComponent 
                    className={`w-12 h-12 mb-3 ${
                      selectedTime === slot.id ? "text-primary" : "text-gray-400"
                    }`} 
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{slot.title}</h3>
                  <p className="text-sm text-gray-600">{slot.time}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeFilter;