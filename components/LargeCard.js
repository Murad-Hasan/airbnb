import Image from "next/image";

const LargeCard = ({ img, title, description, ButtonText }) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-40 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-2">
          {ButtonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
