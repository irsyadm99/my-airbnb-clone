import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]  ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold">
          Not sure where to go?Perfect.
        </p>
        <button className="text-purple-500 bg-white py-4 px-10 my-3 rounded-full shadow-md hover:shadow-lg active:scale-90 transition duration-150 font-bold">
          I'm flexsible
        </button>
      </div>
    </div>
  );
}

export default Banner;
