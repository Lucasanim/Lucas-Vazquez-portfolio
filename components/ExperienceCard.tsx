import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  link: string;
  icon: ReactNode;
}

const ExperienceCard = ({ title, subTitle, icon, link }: Props) => {
  return (
    
      <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
      <a  href={link} target={link ? "_blank" : "_self"}>
        <h3 className="text-2xl font-bold">{title}</h3>
        </a>
        <p className="text-base tracking-wide text-gray-400">{subTitle}</p>
      </div>
    </div>
    
  );
};

export default ExperienceCard;
