import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt="Card image"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="card-block">
        <h4 className="card-title">{location}</h4>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
