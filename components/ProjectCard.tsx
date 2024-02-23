import Image from "next/image";
interface Props {
  title: string;
  onClick: () => any;
  img: string;
}

const ProjectCard = ({ title, onClick, img }: Props) => {
  return (
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group" onClick={() => onClick()}>
        <Image
          className="object-fill h-full translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
          width={420}
          height={350}
          src={img}
          alt={title}
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
  );
};

export default ProjectCard;
