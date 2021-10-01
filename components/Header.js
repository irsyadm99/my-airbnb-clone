import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-6 md:px-10 shadow-md">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className=""
        />
      </div>

      {/* Middle */}
      <div className="flex items-center shadow-sm rounded-full py-2 md:border-2 ">
        <input
          type="text"
          className="pl-2 bg-transparent outline-none flex-grow"
          placeholder="start your search"
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex justify-end items-center space-x-4">
        <p className="hidden lg:inline font-semibold rounded-full hover:bg-gray-100 p-3 cursor-pointer text-gray-800">
          Become a host
        </p>
        <div className="rounded-full hover:bg-gray-100 cursor-pointer py-2 px-3">
          <GlobeAltIcon className="h-6 text-gray-800" />
        </div>
        <div className=" flex items-center border-2 p-2 space-x-2 rounded-full cursor-pointer hover:shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};
