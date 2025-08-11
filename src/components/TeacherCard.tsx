import { useState } from "react";

interface TeacherCardProps {
  name: string;
  image: string;
  experience: string;
  students: string;
  subject: string;
}

const TeacherCard = ({ name, image, experience, students, subject }: TeacherCardProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`teacher-card cursor-pointer rounded-lg p-4 transition-colors
        ${selected ? "bg-blue-100" : "bg-white"}
        hover:bg-blue-50
      `}
    >
      <div className="relative mb-3">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto object-cover"
        />
      </div>

      <h4 className="font-semibold text-card-foreground mb-1">{name}</h4>
      <p className="text-xs text-accent mb-1">{experience}</p>
      <p className="text-xs text-muted-foreground mb-2">{students}</p>
      <p className="text-xs text-muted-foreground">{subject}</p>
    </div>
  );
};

export default TeacherCard;
