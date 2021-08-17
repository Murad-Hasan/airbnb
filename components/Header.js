import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left*/}
      <div className="relative flex items-center h-10 w-[100px] md:w-[130px] cursor-pointer my-auto animate-pulse">
        <Image
          src="https://i.ibb.co/37Gnqm3/qd3.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle*/}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm overflow-hidden">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 text-gray-600 border-none bg-transparent outline-none flex-grow"
        />
        <SearchIcon className="hidden active:scale-105 md:inline-flex h-8 md:mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/*    right*/}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden cursor-pointer md:block text-xs md:text-base hover:text-red-500 transition duration-300">
          Become a Host
        </p>
        <GlobeAltIcon className="h-6 active:scale-105 cursor-pointer" />
        <div className="flex space-x-2 border-2 rounded-full p-2 shadow-sm">
          <MenuIcon className="h-6 active:scale-105 cursor-pointer" />
          <UserCircleIcon className="h-6 active:scale-105 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
