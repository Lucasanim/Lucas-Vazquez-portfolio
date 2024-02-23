import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Ensolvers (Hyros)"
          subTitle="Software engineer  Sept 2021 - Present"
          link="https://hyros.com/"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Software developer  May 2021 - Jul 2021"
          link=""
          icon={<SiFreelancer />}
        />
      </div>
    </div>
  );
};

export default Experience;
