import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeFilter from "@/components/AgeFilter";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import PopularCategories from "@/components/PopularCategories";
import TimeFilter from "@/components/TimeFilter";
import roboticsCourse from "@/assets/robotics-course.jpg";
import teacherAndy from "@/assets/teacher-andy.jpg";

const Index = () => {
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

  const teachers = [
    {
      name: "Andy Brew",
      image: teacherAndy,
      experience: "M.Sc EEE • 5+ Years",
      students: "600+ Students",
      subject: "Computer science"
    },
    {
      name: "Andy Brew", 
      image: teacherAndy,
      experience: "M.Sc EEE • 5+ Years",
      students: "600+ Students", 
      subject: "English"
    },
    {
      name: "Andy Brew",
      image: teacherAndy,
      experience: "M.Sc EEE • 5+ Years", 
      students: "600+ Students",
      subject: "Early education"
    },
    {
      name: "Andy Brew",
      image: teacherAndy,
      experience: "M.Sc EEE • 5+ Years",
      students: "600+ Students",
      subject: "Coding"
    },
    {
      name: "Andy Brew",
      image: teacherAndy,
      experience: "M.Sc EEE • 5+ Years",
      students: "600+ Students", 
      subject: "Computer science"
    },
    {
      name: "Andy Brew",
      image: teacherAndy,
      experience: "M.Sc EEE • 5+ Years",
      students: "600+ Students",
      subject: "Computer science"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AgeFilter />
      
      {/* New Launches Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">New Launches 🌟</h2>
            <p className="text-muted-foreground">Our most loved courses that kids absolutely adore!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses 🌟</h2>
            <p className="text-muted-foreground">Our most loved courses that kids absolutely adore!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learn from Top Teachers</h2>
            <p className="text-muted-foreground">Expert instructors who make learning fun and engaging for every child</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} {...teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">••••••••</span> Webinar starting within 24 hrs <span className="text-primary">••••••••</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} isSellingFast={true} />
            ))}
          </div>
        </div>
      </section>

      <PopularCategories />
      <TimeFilter />
    </div>
  );
};

export default Index;
