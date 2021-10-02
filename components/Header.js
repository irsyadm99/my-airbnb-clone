import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeHolder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleCancel = () => setSearchInput("");

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-6 md:px-10 shadow-md">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="pl-3 bg-transparent outline-none flex-grow text-gray-600 text-lg"
          placeholder={placeHolder || "start your search"}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b-2 mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-lg text-gray-500"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              onClick={handleSearch}
              className="flex-grow text-lg text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
